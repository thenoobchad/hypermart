"use client"

import { Eye, Phone, RectangleGogglesIcon, TruckElectric, X } from "lucide-react";
import { useState } from "react";

type AuthModalProp = {
	isActive: boolean;
	setActive: (arg: boolean) => void
}

export default function AuthModal({isActive, setActive}: AuthModalProp) {
const [authType, setAuthType] = useState<"SIGN_IN" | "SIGN_UP">("SIGN_IN"); 
	const handleFormSwitch = () => {
	setAuthType((prev) => prev === 'SIGN_IN' ?'SIGN_UP': 'SIGN_IN' )
	}
	
	const handleClose = () => {
		setActive(false)
	}
  return (
		<div className="w-screen min-h-screen flex items-center justify-center bg-white/20 backdrop-blur-sm ">
			<div className="flex flex-col gap-4 border rounded-sm w-[80%] sm:w-75 bg-zinc-50 dark:bg-zinc-900">
				<div className="flex justify-between border-b py-4 px-4">
					<span>
						<h4 className="flex gap-2 items-center text-xl font-semibold">
							<TruckElectric size={20} /> Welcome back
						</h4>
						<p className="text-sm">
							{authType === "SIGN_IN"
								? "Sign in to your account to continue"
								: "Enter your details to get started"}
						</p>
					</span>
					<span onClick={handleClose}>
						<X size={16} />
					</span>
				</div>

				<div className="flex flex-col gap-3">
					{authType === "SIGN_UP" && (
						<div className="flex flex-col gap-2 px-4">
							<label htmlFor="phone" className="text-sm">
								Full Name<span className="text-red-600">*</span>
							</label>
							<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
								<input
									type="text"
									className="outline-none"
									placeholder="Enter your name"
								/>{" "}
							</div>
						</div>
					)}

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Email <span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<input
								type="text"
								className="outline-none"
								placeholder="Enter your email"
							/>{" "}
						</div>
					</div>

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Mobile Number <span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<input
								type="text"
								className="outline-none"
								placeholder="Enter a 12 digit number"
							/>{" "}
							<Phone size={18} />
						</div>
					</div>

					<div className="flex flex-col gap-2 px-4">
						<label htmlFor="phone" className="text-sm">
							Password <span className="text-red-600">*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
							<input
								type="text"
								className="outline-none"
								placeholder="Enter a 12 digit number"
							/>{" "}
							<Eye size={18} />
						</div>
						{authType === "SIGN_UP" && (
							<p className="text-xs -mt-1">Must be 8+ characters</p>
						)}
					</div>

					{authType === "SIGN_UP" && (
						<div className="flex flex-col gap-2 px-4 ">
							<label htmlFor="password" className="text-sm">
								Confirm Password <span className="text-red-600">*</span>
							</label>
							<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-2 rounded">
								<input
									type="password"
									className="outline-none"
									placeholder="*********"
								/>{" "}
								<Eye size={18} />
							</div>
						</div>
					)}
					<p className="text-sm text-right px-4">Forgot password?</p>

					<button className="bg-blue-600 my-2 mx-4 text-zinc-50 py-2 rounded">
						Sign in
					</button>
					<div className="flex items-center gap-2">
						<div className="w-full h-px bg-zinc-200" />
						<span className="text-sm">OR</span>
						<div className="w-full h-px bg-zinc-200" />
					</div>
					<button className="text-sm my-2 text-zinc-900 flex justify-center items-center mx-4 gap-2 border py-2 rounded">
						<RectangleGogglesIcon /> Continue with Google
					</button>
				</div>

				<div className=" border-t">
					{authType === "SIGN_UP" ? (
						<p className="text-sm py-3 text-center">
							Don&apos;t have an account?{" "}
							<span onClick={handleFormSwitch}>Create Account</span>
						</p>
					) : (
						<p className="text-sm py-3 text-center">
							Already have an account?{" "}
							<span onClick={handleFormSwitch}>Login</span>
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
