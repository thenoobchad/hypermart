import { Eye, Phone, RectangleGogglesIcon, TruckElectric, X } from "lucide-react";


export default function Auth() {
  return (
		<div className="w-screen h-screen flex items-center justify-center ">
			<div className="flex flex-col gap-4 border px-3 rounded-sm w-[80%] sm:w-[300px]">
				<div className="flex justify-between border-b py-3 px-2">
					<span>
						<h4 className="flex gap-2 items-center">
							<TruckElectric size={20} /> Welcome back
						</h4>
						<p className="text-sm">Sign in to your account to continue</p>
					</span>
					<span>
						<X size={16} />
					</span>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-2">
						<label htmlFor="phone" className="text-sm">
							Mobile Number <span>*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-1 rounded">
							<input type="text" /> <Phone size={18} />
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="password" className="text-sm">
							Password <span>*</span>
						</label>
						<div className="flex bg-zinc-100 items-center text-zinc-700 justify-between px-2 py-1 rounded">
							<input type="text" /> <Eye size={18} />
						</div>
					</div>
					<p className="text-sm text-right">Forgot password?</p>

					<button className="bg-blue-600 my-2 text-zinc-50 py-1 rounded">
						Sign in
					</button>
					<div className="flex items-center gap-2">
						<div className="w-full h-px bg-zinc-200" />
						<span className="text-sm">OR</span>
						<div className="w-full h-px bg-zinc-200" />
					</div>
					<button className="text-sm my-2 text-zinc-900 flex justify-center items-center gap-2 border py-1 rounded">
						<RectangleGogglesIcon /> Continue with Google
					</button>
				</div>
				<div className=" border-t">
					<p className="text-xs py-3 text-center">
						Don&apos;t have an account? <span>Create Account</span>
					</p>
				</div>
			</div>
		</div>
	);
}
