// NOT WORKING YET! Each page link needs to be updated to store the filepath it should turn red and shake on, then it will work.
const html = `<!-- Desktop Navigation (hidden on mobile) -->
    <nav class="bg-white shadow-md p-4 sticky top-0 z-50 hidden md:block">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="../index.html" class="home-link inline-block hover:border-2 hover:px-3 hover:py-1">
                <h1 class="logo text-2xl font-bold cursor-pointer">
                    <nobr>
                        <div class="eyes">
                            <p class="eye inline-block">
                                &gt;
                            </p>
                            _
                            <p class="eye inline-block">
                                &lt;
                            </p>
                        </div>
                    </nobr>
                </h1>
            </a>
            <ul id="desktop-nav" class="flex space-x-2 overflow-auto">
                <li><a href="../idea/index.html" id="current-nav-button" class="nav-button px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white">Idea to App</a>
                    <div class="popup-message" class="absolute hidden translate-x-3 translate-y-[-12px] text-center text-lg font-semibold text-red-800 mt-2 duration-300">
                        Already there!
                    </div>
                </li>
                <li><a href="https://codingblink.com/eclipse-of-eternity" class="nav-button nav-button-usable px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">Eclipse of Eternity</a>
                    <div class="popup-message" class="absolute hidden translate-x-3 translate-y-[-12px] text-center text-lg font-semibold text-red-800 mt-2 duration-300">
                        Already there!
                    </div>
                </li>
                <li><a href="../tutoring/index.html" class="nav-button nav-button-usable px-4 py-2 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 text-white">Coding Tutoring</a>
                    <div class="popup-message" class="absolute hidden translate-x-3 translate-y-[-12px] text-center text-lg font-semibold text-red-800 mt-2 duration-300">
                        Already there!
                    </div>
                </li>
                <li><a href="../job/index.html" class="nav-button nav-button-usable px-4 py-2 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Get a Coding Job</a>
                    <div class="popup-message" class="absolute hidden translate-x-3 translate-y-[-12px] text-center text-lg font-semibold text-red-800 mt-2 duration-300">
                        Already there!
                    </div>
                </li>
                <li><a href="../amazon/index.html" class="nav-button nav-button-usable px-4 py-2 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white">Amazon Store</a>
                    <div class="popup-message" class="absolute hidden translate-x-3 translate-y-[-12px] text-center text-lg font-semibold text-red-800 mt-2 duration-300">
                        Already there!
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <!-- === MOBILE VIEW === -->
    <section class="block md:hidden max-w-xl mx-auto px-4 py-10">
        <div class="text-center">
            <a href="../index.html" class="nav-button nav-button-usable px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg shadow-md">
                Back to Main
            </a>
        </div>
    </section>`;
const nav = document.createElement('nav');
nav.innerHTML = html;
if (document.body.firstChild) {
    document.body.insertBefore(nav, document.body.firstChild);
} else {
    document.body.appendChild(nav);
}
/*
document.addEventListener('DOMContentLoaded', () => {
    const currentPageButton = document.getElementById('current-nav-button');
    const popupMessage = currentPageButton.querySelector('.popup-message');
    popupMessage.addEventListener('animationend', () => {
        popupMessage.classList.add('hidden');
        popupMessage.classList.remove('animate-float-down');
    });
});
*/