import { useState } from 'react';

import React from 'react';

const PokedexHeader = () => {
return (
        <>
            <p>Découvrez le monde fascinant des Pokémon avec notre Pokédex ultime! Que vous
        soyez un Maître Pokémon en devenir ou simplement curieux de découvrir chaque
        créature unique, notre base de données complète est votre porte d'entrée vers
        une aventure extraordinaire. Explorez les caractéristiques, les forces, et les
        faiblesses de chaque Pokémon, plongez dans leur univers, et devenez l'expert
        ultime.
            </p>
        <h2>Fonctionnalités de l'application:</h2>
            <ul>
                <li>Recherche Instantanée par Nom: Ne perdez plus jamais de temps à chercher votre Pokémon préféré. Entrez simplement son nom pour accéder instantanément à une mine d'informations.</li>
                <li>Fiches Détaillées: Chaque Pokémon est unique, et notre Pokedex célèbre cette diversité.</li>
                <li>Toujours Plus à Découvrir: Nous nous engageons à enrichir constamment le Pokedex avec de nouvelles fonctionnalités passionnantes. Restez à l'affût!</li>
            </ul>
        </>
  );
}

export default PokedexHeader;
