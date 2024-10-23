import Image from 'next/image'

export default function Card() {
    return(
        <div className="card m-[45px] w-[200px] bg-slate-400 p-[10px] rounded-lg">
            <Image className="h-[100px] w-[100%] block rounded-md" src="/images2.png" width={100} height={100} alt="" />
            <div className="mt-[10px] font-bold text-lg">Title</div>
            <div className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempore ipsa nam qui repellendus.</div>
        </div>
    )
}