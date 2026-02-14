"use client"

import { Eye, EyeClosed, Phone, RectangleGogglesIcon, TruckElectric, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { signinAction, signupAction } from "@/lib/actions";
import { toast } from "sonner";

type AuthModalProp = {
	isActive: boolean;
	setActive: (arg: boolean) => void
}

export default function AuthModal({ isActive, setActive }: AuthModalProp) {
	const router = useRouter()
	const [view, setView] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const [authType, setAuthType] = useState<"SIGN_IN" | "SIGN_UP">("SIGN_IN");
	const handleFormSwitch = () => {
		setAuthType((prev) => prev === 'SIGN_IN' ? 'SIGN_UP' : 'SIGN_IN')
	}

	const handleClose = () => {
		setActive(false)
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		setError("")
		const formData = new FormData(e.currentTarget)

		try {

			if(authType === "SIGN_IN") {
				const { success, message, role } = await signinAction(formData)

				if (!success) {
					setError(message || "Sign in failed.")
				} else {

					if (role === "ADMIN") {
						toast.success("Welcome back, Admin!")
						router.push("/admin")
						setActive(false)
						return
					} else { 
						toast.success("Signed in successfully")
						setActive(false)
						router.refresh()
					}
					
				}
				
				
			} else {
				const { success, message } = await signupAction(formData)

				if (!success) { setError(message || "Failed to create account") } else {
					toast.success("Account created successfully")
					setActive(false)
					router.refresh()
				 }

			}

		} catch (error) {
			console.error(error)
			setError("An error occurred. Please try again.")
		}

		setLoading(false)
	}


	return (
		<div className="w-screen min-h-screen flex items-center justify-center bg-white/20 backdrop-blur-sm ">
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 border rounded-sm w-[80%] sm:w-75 bg-zinc-50 ">
				<div className="flex justify-between border-b py-4 px-4">
					<span>
						<h4 className="flex gap-2 items-center text-xl font-semibold">
							<TruckElectric size={20} /> Welcome back
						</h4>
						<p className="text-sm">
							{authType === "SIGN_IN" ?
								"Sign in to your account to continue"
								: "Enter your details to get started"}
						</p>
					</span>
					<span onClick={handleClose}>
						<X size={16} />
					</span>
				</div>

				<div className="flex flex-col gap-3 max-h-[60vh] overflow-auto">
					

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Email <span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<input
								name="email"
								type="text"
								className="outline-none"
								placeholder="Enter your email"
							/>{" "}
						</div>
					</div>
					

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Password <span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<input
								name="password"
								type={`${!view? "password" :"text"}`}
								className="outline-none"
								placeholder="********"
							/>{" "}
							<span  onClick={() => setView(!view)} >
								{!view ? <Eye size={18} /> : <EyeClosed size={18} />}
							</span>
						
						</div>
						{authType === "SIGN_UP" && (
							<p className="text-xs -mt-1">Must be 8+ characters</p>
						)}
					</div>

					{authType === "SIGN_UP" && (
						<div className="flex flex-col gap-2 px-4">
							<label htmlFor="phone" className="text-sm">
								Confirm Password <span className="text-red-600">*</span>
							</label>
							<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
								<input
									name="password"
									type={`${!view ? "password" : "text"}`}
									className="outline-none"
									placeholder="********"
								/>{" "}
								<span onClick={() => setView(!view)} >
									{!view ? <Eye size={18} /> : <EyeClosed size={18} />}
								</span>

							</div>
							{authType === "SIGN_UP" && (
								<p className="text-xs -mt-1">Must be 8+ characters</p>
							)}
						</div>
					)}
					{authType === "SIGN_IN" && (
						<p className="text-sm text-right px-4">Forgot password?</p>
					)}
					{error && <p className="text-sm italic text-red-500 text-center">{error}</p>}
					<button className="bg-blue-600 my-2 mx-4 text-zinc-50 py-2 mt-4 rounded">
						{loading ? "Signing in..." : authType === "SIGN_UP" ? "Sign up" : "Sign in"}
					</button>
					
				</div>

				<div className=" border-t">
					{authType === "SIGN_UP" ?
						<p className="text-sm py-3 text-center">
							Already have an account?{"  "}
							<span
								onClick={handleFormSwitch}
								className="cursor-pointer underline">
								Login
							</span>
						</p>
						: <p className="text-sm py-3 text-center">
							Don&apos;t have an account?{"  "}
							<span
								onClick={handleFormSwitch}
								className="cursor-pointer underline">
								Create account
							</span>
						</p>
					}
				</div>
			</form>
		</div>
	);
}
