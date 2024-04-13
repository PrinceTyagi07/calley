import React from 'react'
// const [countries, setCountries] = useState([]);
//     const [selectedCountry, setSelectedCountry] = useState('');

//     useEffect(() => {
//         // Fetch the list of countries
//         fetch('https://restcountries.com/v3.1/all')
//             .then(response => response.json())
//             .then(data => {
//                 // Extract country names from the response
//                 const countryNames = data.map(country => country.name.common);
//                 // Sort the country names alphabetically
//                 const sortedCountries = countryNames.sort((a, b) => a.localeCompare(b));
//                 // Set the sorted list of countries
//                 setCountries(sortedCountries);
//             })
//             .catch(error => console.error('Error fetching countries:', error));
//     }, []);

const Expert = () => {
    return (
        <div className=''>
            <div className="flex justify-between items-center px-10 bg-black py-6">
                <div className=" w-[150px]">

                    <h1 className='capitalize  text-white font-semibold text-4xl   '> Talk to expert</h1>
                </div>
                <div class="flex items-center justify-center">
                    <div class="relative">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            class="border-b border-gray-300 py-3 focus:border-b-2 focus:border-blue-700 bg-white transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            for="username"
                            class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        >Name</label>

                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div class="relative">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            class="border-b  bg-white  border-gray-300 py-3 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            for="username"
                            class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        >Name</label>

                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div class="relative">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            class="border-b  bg-white  border-gray-300 py-3 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            for="username"
                            class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        >Name</label>

                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div class="relative">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            class="border-b py-3  bg-white  border-gray- focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            for="username"
                            class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                        >Name</label>

                    </div>
                </div>
                <div className='flex flex-col my-1 bg-white'>
                    <select  className='py-3 px-1' name="" id="">

                    <option value="">select the country</option>
                    <option value="">India</option>
                    <option value="">US</option>
                    <option value="">Australia</option>
                    <option value="">Neuziland</option>
                        
                    </select>
                </div>
                <div className='flex flex-col my-1 bg-white capitalize '>
                    <select className='py-3 px-1'  name="" id="">

                    <option value="">select the State</option>
                    <option value="">UttarPradesh</option>
                    <option value="">chandigadh</option>
                    <option value="">assam</option>
                    <option value="">westbengal</option>
                        
                    </select>
                </div>

                <div className='text-white text-xl font-semibold  flex gap-1 items-center'>
                    <input className='w-[17px] h-[17px]' type="checkbox" id='check'/>
                    <label htmlFor="check">I agree to T&C</label>
                </div>
            </div>
        </div>
    )
}

export default Expert