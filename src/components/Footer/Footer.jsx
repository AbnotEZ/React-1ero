const Footer = (props)  => {
    console.log(props)
    return (
        <footer class="p-4 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 bg-sky-500">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://www.pokemon.com/es/" class="flex items-center mb-4 sm:mb-0">
            <img src={props.image} class="mr-3 h-12" alt="Pokemon Logo" />
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://www.pokemon.com/es/" class="hover:underline">POKEMON™</a>. All Rights Reserved.
    </span>
</footer>
    );
};
export default Footer;






