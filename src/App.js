import React, { useState } from "react";
import "./styles.css";
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-[#02010a] overflow-hidden relative">
      <div className="orb bg-blue-600 top-[-10%] left-[-10%] w-80 h-80 opacity-30"></div>
      <div
        className="orb bg-purple-600 bottom-[-10%] right-[-10%] w-80 h-80 opacity-30"
        style={{ animationDelay: "-1.5s" }}
      ></div>
      <main className="relative z-10 w-full max-w-sm">
        <h1 className="text-4xl font-black text-white text-center mb-12 italic tracking-tighter">
          Uni<span className="txt-flow">Connect</span>
        </h1>
        <div className="neon-shield bg-white/5 backdrop-blur-xl rounded-[40px] p-8 relative pt-14 border border-white/10 shadow-2xl">
          {/* دائرة اللوجو البديلة */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-b from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/40 border-2 border-cyan-400/20">
              <span className="text-white text-3xl font-black">UC</span>
            </div>
          </div>
          <h2 className="text-white text-center font-bold text-xl mb-6">
            Create Account
          </h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-all placeholder:text-gray-600"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="University Email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-all placeholder:text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Pass"
                className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-all placeholder:text-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm"
                className="w-1/2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-all placeholder:text-gray-600"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <button className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white font-black rounded-xl hover:brightness-125 transition-all shadow-lg shadow-cyan-500/20 uppercase tracking-widest text-[10px] mt-2">
              Register Now
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <button className="text-cyan-400 text-[10px] font-bold tracking-widest hover:text-white uppercase">
              Already a member? Log in
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Register;
