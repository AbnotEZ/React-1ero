const Card = (props)  => {
    console.log(props)
    return (
        <div class="card">
        <a href="#" class="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl  bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.image} alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal  bg-white">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.detail}</p>
        </div>
    </a>
    </div>
    );
};
export default Card;

