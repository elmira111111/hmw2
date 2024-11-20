
        // создаем карточку
        function createCard(imageUrl, title, description) {
            const card = document.createElement('div');
            card.className = 'card';

            // Добавляем изображение
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = title;
            card.appendChild(img);

            // инфо внутри карты
            const content = document.createElement('div');
            content.className = 'card-content';

            const cardTitle = document.createElement('h3');
            cardTitle.className = 'card-title';
            cardTitle.textContent = title;

            const cardDescription = document.createElement('a');
            cardDescription.className = 'card-description';
            cardDescription.textContent = description;

            // const button = document.createElement('a');
            // button.className = 'card-button';
            // button.textContent = buttonText;
            // button.href = '#';

            //  содержимое карточкb
            content.appendChild(cardTitle);
            content.appendChild(cardDescription);
            card.appendChild(content);

            // Добавляем карточку на страницу
            document.getElementById('card-container').appendChild(card);
        }

        createCard(
            'https://cdn2.unrealengine.com/remix-key-art-1920x1080-0b23bdca2f5f.jpg',
            'Free-To-Play',
            'Подробнее...',
        );

        createCard(
            'https://i.ytimg.com/vi/v-vqi0UaUdE/maxresdefault.jpg',
            'Car Racing',
            'Подробнее...',
        );

        createCard(
            'https://www.cdmi.in/courses@2x/2D3D-Game-Design.webp',
            'Game Design Course',
            'Подробнее...',
        );

