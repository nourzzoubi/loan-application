export default function Nav(){
    return(
        <header className="bg-gray-950">
            <div className="flex items-center justify-between">
                <div className="mx-22">
                    <div className="flex items-center gap-3">
                                <div className="    flex h-12 w-12    items-center justify-center    rounded-full border border-[#b89b62] text-[#d4b878] shadow-[0_0_25px_rgba(184,155,98,0.12)]">
                                    <span className="text-lg font-serif">N</span>
                                </div>
                                <div>
                                    <h2 className="    text-xl    font-semibold    tracking-[0.18em] text-amber-50">NOBLE</h2>
                                    <p className="    text-[9px]    uppercase    tracking-[0.38em]    text-[#b89b62]">Financial</p>
                                </div>
                            </div>
                </div>
                <div className="relative flex items-center justify-center w-5 h-5 m-11">
                    {/* الـ Glow الخارجي */}
                    <div className="absolute w-5 h-5 rounded-full bg-yellow-400/30 animate-ping"></div>
                    {/* النقطة نفسها */}
                    <div className="relative w-2 h-2 rounded-full bg-yellow-600 shadow-[0_0_10px_3px_rgba(250,204,21,0.8)]"></div>
                </div>
            </div>
        </header>
    )
}