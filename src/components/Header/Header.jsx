import './style.css'

const Header = (props)  => {
    return (
      <>
  <h3 class="text-center text-white text-xl bg-cyan-800  ">{props.title}</h3>
<ul class="flex gap-1 w-full justify-center p-3.5 bg-cyan-600">
    <li>
        <label for="react-option" class="inline-flex items-center p-5 w-medium text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
            <img src={props.image} class="mr-3 h-12 mx-auto" alt="Pokemon Logo" />
                <div class="w-full text-lg font-semibold mx-auto">Inicio</div>
            </div>
        </label>
    </li>
    <li>
    <label for="react-option" class="inline-flex items-center p-5 w-medium text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">  
            <div class="block">
            <img src={props.image1} class="h-12 mx-auto" alt="Pokemon Logo" />
                <div class="w-full text-lg font-semibold mx-auto">Play!</div>
            </div>
        </label>
    </li>
    <li>

    <label for="react-option" class="inline-flex justify-center p-5 w-medium text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">  
            <div class="block">
            <img src={props.image2} class="h-12 mx-auto" alt="Pokemon Logo" />
                <div class="w-full text-lg font-semibold mx-auto">Pokedex</div>
            </div>
        </label>
    </li>
</ul>
</>
    );
}
export default Header;