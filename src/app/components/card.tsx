import image from '@/app/images.png'

export default function Card() {
    return(
        <div className="card m-[45px] w-[200px] bg-slate-400 p-[10px] rounded-lg">
            <img className="h-[100px] w-[100%] block rounded-md" src="https://static.feber.se/article_images/57/98/57/579857.jpeg" alt="" />
            <div className="mt-[10px] font-bold text-lg">Title</div>
            <div className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempore ipsa nam qui repellendus.</div>
        </div>
    )
}