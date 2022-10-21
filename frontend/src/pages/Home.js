import React from 'react'

export default function Home() {
    return (
        <div className={`bg-3DCattleya bg-cover bg-no-repeat bg-center w-screen h-screen text-white`}>
            <div className={`bg-white/50 w-full h-screen flex items-center flex-col`}>
                <div className={`flex justify-center content-center`}>

                    <h1 className={`text-black text-6xl mt-52 mb-10 text-center uppercase`}>Orchid Friend-Z</h1>

                </div>
                <div className={`flex justify-center content-center flex-col px-10 w-[800px]`}>

                    <p className={`text-black text-xl text-center w-fit font-bold uppercase`}>A social app conglomerate for Orchid Growers to share their Bloomers and tips for growing!</p>
                        <br />
                    <p className={`text-black text-xl text-center w-fit font-bold uppercase`}>Our end goal is to create a unified place for not only Orchid Societies to share their galleries, but for the non-society members to get the joy of the app as well!</p>

                </div>
            </div>
        </div>
    );
};