'use client'

import { useFormStatus } from "react-dom"


export const SearchButton = () => {
    const {pending} = useFormStatus()


    return (
        <button disabled={pending} className="btn btn-md md:btn-lg bg-green-500 font-bold text-green-100 hover:bg-green-100 hover:text-green-950 border-none rounded-2xl bg-opacity-90 w-full md:w-36 ">
            {pending ? <span className="loading-spinner loading"></span> : "Buscar"}
        </button>
    )
}