// =========================================================================
// ТВОИ 15 ФИЛЬМОВ
// Теперь здесь нужны только названия, описания и обложки (картинки).
// =========================================================================

function demoCover(num) {
    const label = String(num).padStart(2, '0');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900"><rect width="600" height="900" fill="#141416"/><circle cx="300" cy="420" r="110" fill="none" stroke="rgba(255,255,255,0.12)"/><text x="300" y="432" fill="#98989d" font-family="Georgia,serif" font-size="36" text-anchor="middle">${label}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const movies = [
    {
        title: "УЩЕЛЬЕ",
        description: "Два элитных снайпера по разные стороны туманной бездны нарушают главный приказ и влюбляются, но вскоре им придётся спуститься в самый ад, чтобы спасти друг друга от жутких тварей из глубин.",
        poster: "images/ущелье.jpg" // Замени на: "images/1.jpg"
    },
    {
        title: "В метре друг от друга",
        description: "«В метре друг от друга» — трогательная мелодрама о парне и девушке с тяжёлой болезнью лёгких, которые влюбляются в больнице, но ради спасения жизни им строго запрещено подходить друг к другу ближе чем на полтора метра.",
        poster: "images/в-метре-друг-от-друга.jpg"
    },
    {
        title: "Анора",
        description: "«Анора» — это фильм о молодой танцовщице из Нью-Йорка, которая влюбляется в избалованного сына русского богача и спонтанно выходит за него замуж. Когда об этом узнают влиятельные родители парня, они приходят в ярость и отправляют своих людей развести молодых. Начинается смешная и одновременно грустная суматоха, в которой обычная девушка пытается отстоять свой брак и себя перед людьми с большими деньгами.",
        poster: "images/Анора.webp"
    },
    {
        title: "Интерстеллар",
        description: "«Интерстеллар» — это фантастический фильм о том, как в недалеком будущем Земля умирает от засухи и голода, поэтому бывший пилот Купер оставляет детей и летит с командой сквозь космическую червоточину в другую галактику искать новый дом для людей. Из-за огромной гравитации черных дыр время в космосе течет гораздо медленнее, так что пока герои проверяют далекие планеты, на Земле проходят десятилетия. В итоге за масштабными космическими приключениями скрывается простая и трогательная история о любви отца и дочери, которая способна преодолеть время и пространство ради спасения друг друга.",
        poster: "images/Интерстеллар.webp"
    },
    {
        title: "Горничная",
        description: "Девушка с непростым прошлым по имени Милли устраивается горничной с проживанием в роск ошный дом богатой семьи Винчестеров. Поначалу работа кажется спасением, но вскоре хозяйка дома Нина начинает вести себя странно, устраивает скандалы и намеренно усложняет Милли жизнь. Постепенно девушка понимает, что за картинкой идеальной семьи скрываются мрачные тайны, а сама она оказалась в опасной ловушке.",
        poster: "images/горничная .jpg"
    },
    {
        title: "Кто я",
        description: "«Кто я» (2014) — немецкий триллер о скромном компьютерном гении Беньямине, который вместе с новым харизматичным другом создаёт хакерскую группу. Сначала парни устраивают дерзкие кибератаки ради славы в сети, но вскоре переходят дорогу опасным преступникам и спецслужбам, превращаясь в самых разыскиваемых хакеров мира.",
        poster: "images/кто-я.jpg"
    },
    {
        title: "Волк с Уолл-стрит",
        description: "«Волк с Уолл-стрит» — это история о молодом брокере, который в 1990-х сказочно разбогател на продаже пустых акций доверчивым клиентам. Огромные деньги превратили его жизнь в бесконечную безумную вечеринку, пока его аферами не занялось ФБР, что привело к полному краху и тюрьме.",
        poster: "images/волк.jpg"
    },
    {
        title: "Проект Х",
        description: "«Проект X: Дорвались» — это смешной фильм про трёх друзей-школьников. Они решили устроить тихую вечеринку, пока родителей нет дома, но на неё сбежался весь город и случайно разнёс всю улицу.",
        poster: "images/проектX.jpg"
    },
    {
        title: "Остров проклятых",
        description: "«Остров проклятых» — это напряжённый детектив с Леонардо Ди Каприо. Двое следователей плывут на закрытый остров с психбольницей для опасных преступников, чтобы найти сбежавшую пациентку, но из-за урагана и странного поведения врачей герой начинает сомневаться в собственном рассудке.",
        poster: "images/Остров-проклятых.webp"
    },
    {
        title: "Бойцовский клуб",
        description: "«Бойцовский клуб» — это культовый триллер с Брэдом Питтом и Эдвардом Нортоном. Уставший от скучной жизни офисный работник встречает загадочного бунтаря, и вместе они создают подпольный клуб для кулачных боёв, который со временем превращается в опасную анархистскую организацию.",
        poster: "images/бойцовский-клуб.jpg"
    },
    {
        title: "Однажды в… Голливуде",
        description: "«Однажды в… Голливуде» — это фильм про двух друзей из мира кино в 1969 году: угасающего актёра и его дублёра-каскадёра. Они просто живут, ходят на съёмки и пытаются снова стать популярными, но случайно сталкиваются с бандой опасных фанатиков.",
        poster: "images/однажды-в-галливуде.jpeg"
    },
    {
        title: "Граф Монте-Кристо",
        description: "«Граф Монте-Кристо» — это приключенческий фильм про доброго моряка Эдмона Дантеса, которого несправедливо бросили в тюрьму по ложному доносу завистников. Спустя много лет ему удаётся сбежать, найти несметные сокровища на тайном острове и вернуться в общество под видом богатого таинственного графа, чтобы жестоко отомстить всем, кто разрушил его жизнь.",
        poster: "images/граф.jpg"
    },
    {
        title: "Социальная сеть",
        description: "«Социальная сеть» — это фильм о том, как обычный студент Марк Цукерберг придумал Facebook в своей комнате в общежитии. Сайт быстро стал популярным во всём мире и принес ему миллиарды, но из-за денег и славы Марк поссорился с лучшим другом и оказался в центре громких судов.",
        poster: "images/социальная-сеть.jpg"
    },
    {
        title: "Пчеловод",
        description: "«Пчеловод» — это боевик с Джейсоном Стэйтемом. Он играет бывшего секретного агента, который ушёл на покой и мирно разводит пчёл на ферме. Когда телефонные мошенники обманом забирают все деньги у его доброй соседки и доводят её до самоубийства, герой берётся за оружие и в одиночку объявляет войну всей преступной сети.",
        poster: "images/пчеловод.jpeg"
    },
    {
        title: "На цепи",
        description: "«На цепи» (2025) — это фильм про дерзкого молодого хулигана Томми, которого после бурной ночи похищает с виду приличная семья. Они сажают парня на цепь в своём подвале и пытаются насильно «перевоспитать» его с помощью строгих правил, книг и наказаний, пока он ищет способ сбежать.",
        poster: "images/на-цепи.jpeg"
    }
];

// =========================================================================
// ЕДИНАЯ МУЗЫКА НА ВСЕ ФИЛЬМЫ
// =========================================================================

// Укажи здесь путь к твоей общей песне (например: "music/background.mp3")
const BACKGROUND_MUSIC_PATH = "music/after-dark.mp3"

document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const movieScreen = document.getElementById('movie-screen');
    const movieStage = document.getElementById('movie-stage');
    const ambientBackdrop = document.getElementById('ambient-backdrop');

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const nextBtnText = document.getElementById('next-btn-text');
    const nextBtnArrow = document.getElementById('next-btn-arrow');
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    const audioStatusText = document.getElementById('audio-status-text');

    const movieCounter = document.getElementById('movie-counter');
    const moviePoster = document.getElementById('movie-poster');
    const movieTitle = document.getElementById('movie-title');
    const movieDescription = document.getElementById('movie-description');

    let currentIndex = 0;
    let isTransitioning = false;
    let globalAudio = null;
    let isPlaying = false;
    let isMutedByUser = false;

    // Создаём единый аудио-объект один раз
    if (BACKGROUND_MUSIC_PATH) {
        globalAudio = new Audio(BACKGROUND_MUSIC_PATH);
        globalAudio.loop = true;
        globalAudio.preload = 'auto';
        globalAudio.volume = 0.75;
    }

    function updateAudioUI(playing) {
        isPlaying = playing;
        audioToggleBtn.classList.toggle('playing', playing);
        audioStatusText.textContent = playing ? 'Пауза' : 'Звук';
    }

    function startGlobalMusic() {
        if (!globalAudio || isMutedByUser) return;
        globalAudio.play()
            .then(() => updateAudioUI(true))
            .catch(() => updateAudioUI(false));
    }

    function stopGlobalMusic() {
        if (!globalAudio) return;
        globalAudio.pause();
        globalAudio.currentTime = 0;
        updateAudioUI(false);
    }

    function preloadNext(index) {
        const nextIdx = index + 1;
        if (nextIdx < movies.length && movies[nextIdx].poster) {
            const img = new Image();
            img.src = movies[nextIdx].poster;
        }
    }

    function updateMovieDOM(index) {
        const movie = movies[index];
        const total = movies.length;
        const isLast = index === total - 1;

        movieCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
        movieTitle.textContent = movie.title;
        movieDescription.textContent = movie.description;
        moviePoster.src = movie.poster;

        ambientBackdrop.style.backgroundImage = `url("${movie.poster}")`;
        ambientBackdrop.classList.add('visible');

        nextBtnText.textContent = isLast ? 'Вернуться в начало' : 'Следующий фильм';
        nextBtnArrow.classList.toggle('hidden', isLast);

        preloadNext(index);
    }

    function renderMovie(index, animate = true) {
        if (!animate) {
            updateMovieDOM(index);
            return;
        }

        isTransitioning = true;
        movieStage.classList.remove('transition-in');
        movieStage.classList.add('transition-out');

        setTimeout(() => {
            updateMovieDOM(index);
            movieStage.classList.remove('transition-out');
            void movieStage.offsetWidth;
            movieStage.classList.add('transition-in');
            setTimeout(() => { isTransitioning = false; }, 600);
        }, 400);
    }

    // Нажатие «Начать просмотр»
    startBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = 0;
        isMutedByUser = false;

        updateMovieDOM(0);
        startGlobalMusic(); // Запуск музыки при старте

        introScreen.classList.remove('active');

        setTimeout(() => {
            movieStage.classList.add('transition-in');
            movieScreen.classList.add('active');
            isTransitioning = false;
        }, 450);
    });

    // Нажатие «Следующий фильм» / «Вернуться в начало»
    nextBtn.addEventListener('click', () => {
        if (isTransitioning) return;

        if (currentIndex < movies.length - 1) {
            currentIndex++;
            renderMovie(currentIndex, true);
            // Музыка продолжает играть без каких-либо прерываний!
        } else {
            isTransitioning = true;
            stopGlobalMusic(); // Останавливаем музыку при возврате на главную
            ambientBackdrop.classList.remove('visible');
            movieScreen.classList.remove('active');

            setTimeout(() => {
                currentIndex = 0;
                introScreen.classList.add('active');
                isTransitioning = false;
            }, 500);
        }
    });

    // Кнопка управления звуком (Пауза / Воспроизведение) вверху справа
    audioToggleBtn.addEventListener('click', () => {
        if (!globalAudio) return;
        if (isPlaying) {
            isMutedByUser = true;
            globalAudio.pause();
            updateAudioUI(false);
        } else {
            isMutedByUser = false;
            globalAudio.play()
                .then(() => updateAudioUI(true))
                .catch(() => updateAudioUI(false));
        }
    });

    // Свайп влево на телефоне
    let touchStartX = 0;
    let touchStartY = 0;

    movieScreen.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    movieScreen.addEventListener('touchend', (e) => {
        if (isTransitioning) return;
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        const deltaY = e.changedTouches[0].screenY - touchStartY;

        if (Math.abs(deltaX) > 65 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5 && deltaX < 0) {
            nextBtn.click();
        }
    }, { passive: true });

    // Стрелка вправо на клавиатуре
    document.addEventListener('keydown', (e) => {
        if (!movieScreen.classList.contains('active') || isTransitioning) return;
        if (e.key === 'ArrowRight') nextBtn.click();
    });
});