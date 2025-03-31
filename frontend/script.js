const weatherSvgs = {
    Thunderstrom: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	    <path fill="currentColor" d="M4.63 16.91q0 1.665.99 2.97c.99 1.305 1.52 1.47 2.58 1.79l-.66 1.68c-.03.14.02.22.14.22h2.13l-.98 4.3h.28l3.92-5.75c.04-.04.04-.09.01-.14s-.08-.07-.15-.07h-2.18l2.48-4.64c.07-.14.02-.22-.14-.22h-2.94c-.09 0-.17.05-.23.15l-1.07 2.87c-.71-.18-1.3-.57-1.77-1.16s-.7-1.26-.7-2.01c0-.83.28-1.55.85-2.17c.57-.61 1.27-.97 2.1-1.07l.53-.07c.13 0 .2-.06.2-.18l.07-.51c.11-1.08.56-1.99 1.37-2.72s1.76-1.1 2.85-1.1s2.04.37 2.85 1.1c.82.73 1.28 1.64 1.4 2.72l.07.58c0 .11.06.17.18.17h1.6c.91 0 1.68.32 2.32.95s.97 1.4.97 2.28c0 .85-.3 1.59-.89 2.21s-1.33.97-2.2 1.04c-.13 0-.2.06-.2.18v1.37c0 .11.07.17.2.17c1.33-.04 2.46-.55 3.39-1.51s1.39-2.11 1.39-3.45c0-.9-.22-1.73-.67-2.49a4.9 4.9 0 0 0-1.81-1.8c-.77-.44-1.6-.66-2.5-.66h-.31c-.33-1.33-1.04-2.42-2.11-3.26s-2.3-1.27-3.68-1.27c-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.1 3.36c-1.11.26-2.02.83-2.74 1.73s-1.08 1.95-1.08 3.1m8.14 9.71c0 .39.19.65.58.77c.01 0 .05 0 .11.01s.11.01.14.01c.17 0 .33-.05.49-.15s.27-.26.32-.48l2.25-8.69c.06-.24.04-.45-.07-.65a.83.83 0 0 0-.5-.39l-.26-.03c-.16 0-.32.05-.47.15a.74.74 0 0 0-.31.45l-2.26 8.72c-.01.1-.02.19-.02.28m4.16-3.06c0 .13.03.26.1.38c.14.22.31.37.51.44c.11.03.21.05.3.05s.2-.02.32-.08q.315-.135.42-.57l1.44-5.67c.03-.14.05-.23.05-.27c0-.15-.05-.3-.16-.45s-.26-.26-.46-.32l-.26-.03c-.17 0-.33.05-.47.15a.82.82 0 0 0-.3.45l-1.46 5.7c0 .02 0 .05-.01.11c-.02.05-.02.08-.02.11" />
    </svg>`,

    Drizzle: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	    <path fill="currentColor" d="M4.6 16.93c0-1.16.36-2.18 1.09-3.08c.72-.9 1.65-1.48 2.78-1.73c.29-1.38.98-2.5 2.07-3.39S12.88 7.4 14.3 7.4c1.39 0 2.63.43 3.72 1.28c1.08.85 1.79 1.95 2.12 3.3h.34c.9 0 1.73.22 2.48.66c.76.44 1.35 1.04 1.79 1.8c.43.76.65 1.59.65 2.49c0 1.34-.46 2.48-1.37 3.44c-.92.96-2.04 1.46-3.37 1.5c-.12 0-.18-.06-.18-.17v-1.34c0-.11.06-.17.18-.17c.84-.07 1.57-.42 2.17-1.05s.9-1.37.9-2.22q0-1.335-.96-2.31c-.64-.64-1.4-.97-2.29-.97h-1.63c-.12 0-.19-.06-.22-.18l-.07-.57c-.07-.71-.3-1.36-.7-1.94a4.26 4.26 0 0 0-3.55-1.85c-1.1 0-2.05.36-2.86 1.09s-1.27 1.64-1.37 2.72l-.07.54c0 .09-.05.14-.16.14l-.54.11c-.84.07-1.55.41-2.11 1.03c-.57.62-.85 1.35-.85 2.2c0 .87.3 1.62.89 2.25s1.31.97 2.17 1.02c.12 0 .18.06.18.17v1.34c0 .11-.06.17-.18.17c-.66-.03-1.28-.18-1.88-.45S6.42 20.8 6 20.36c-.43-.44-.77-.95-1.02-1.55s-.38-1.22-.38-1.88m5.42 6.77c0-.03.01-.08.02-.13s.02-.09.02-.11l.27-1.03c.07-.22.2-.4.4-.51c.2-.12.41-.14.64-.07s.4.2.52.4s.14.41.07.64l-.24 1.01c-.13.44-.38.66-.76.66h-.09c-.03 0-.07-.01-.11-.01c-.04-.01-.07-.01-.1-.01c-.21-.06-.37-.18-.48-.34s-.16-.34-.16-.5m1.32-4.82c0-.02 0-.06.01-.11s.01-.08.01-.09l.3-1.05c.06-.19.17-.34.32-.45c.15-.1.31-.15.47-.15h.08c.03 0 .06.01.09.01c.03.01.06.01.08.01c.23.07.4.2.51.4c.12.2.14.41.07.64l-.24 1c-.07.28-.2.47-.4.59s-.42.12-.65.02c-.22-.06-.38-.17-.49-.34s-.16-.32-.16-.48m1.23 7.95c0-.03.01-.07.02-.13s.02-.09.02-.12l.29-.99c.06-.24.2-.42.4-.54s.42-.15.65-.08s.39.2.51.41s.13.42.07.65l-.25 1.04c-.11.41-.37.61-.8.61c-.05 0-.13-.01-.24-.04a.72.72 0 0 1-.49-.3a.84.84 0 0 1-.18-.51m1.34-4.77c0-.06.01-.14.04-.25l.27-1.03c.07-.23.2-.4.41-.51c.2-.12.42-.14.65-.07a.805.805 0 0 1 .57 1.04l-.24.99c-.13.45-.37.68-.72.68c-.04 0-.15-.02-.31-.06a.72.72 0 0 1-.49-.3a.78.78 0 0 1-.18-.49m2.82 1.68q0-.105.03-.24l.28-.99c.07-.24.2-.42.41-.54s.41-.15.63-.09c.23.07.41.2.53.41q.18.3.09.63l-.29 1.06c-.1.41-.36.61-.79.61c-.09 0-.18-.01-.26-.03a.7.7 0 0 1-.46-.3c-.1-.18-.16-.35-.17-.52m1.38-4.76c0-.03.02-.12.05-.26l.3-1.03c.04-.21.13-.37.29-.47s.32-.15.49-.14c.04-.01.13 0 .24.03c.22.05.39.18.52.38c.12.17.14.38.07.65l-.24 1.03c-.13.43-.38.65-.76.65c-.06 0-.17-.02-.34-.06a.82.82 0 0 1-.62-.78" />
    </svg>`,

    Rain: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	    <path fill="currentColor" d="M4.64 16.91c0-1.15.36-2.17 1.08-3.07a4.82 4.82 0 0 1 2.73-1.73c.31-1.36 1.02-2.48 2.11-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.65s1.37 1.03 1.81 1.78s.67 1.58.67 2.47c0 .88-.21 1.69-.63 2.44s-1 1.35-1.73 1.8s-1.53.69-2.4.71c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.39.9-2.26s-.33-1.62-.98-2.26s-1.42-.96-2.31-.96h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58a4.08 4.08 0 0 0-1.39-2.71c-.82-.73-1.76-1.09-2.85-1.09s-2.05.36-2.85 1.09a4.02 4.02 0 0 0-1.36 2.71l-.07.53c0 .12-.07.19-.2.19l-.53.03c-.83.1-1.53.46-2.1 1.07s-.85 1.33-.85 2.16c0 .87.3 1.62.9 2.26s1.33.98 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.06-2.47-.57-3.4-1.53s-1.37-2.1-1.37-3.43m5.35 6.69c0-.04.01-.11.04-.2l1.63-5.77a.837.837 0 0 1 1.02-.56c.24.04.42.17.54.37s.15.42.08.67l-1.63 5.73c-.12.43-.4.64-.82.64c-.04 0-.07-.01-.11-.02c-.06-.02-.09-.03-.1-.03a.83.83 0 0 1-.49-.33a.9.9 0 0 1-.16-.5m2.62 2.81l2.44-8.77c.04-.19.14-.34.3-.44s.32-.15.49-.15q.135 0 .27.03c.22.06.38.19.49.39s.13.41.07.64l-2.43 8.78c-.04.17-.13.31-.29.43s-.32.18-.51.18c-.09 0-.18-.02-.25-.05c-.2-.05-.37-.18-.52-.39c-.11-.18-.13-.39-.06-.65m4.13-2.79c0-.04.01-.11.04-.23l1.63-5.77a.83.83 0 0 1 .3-.44c.15-.1.3-.15.46-.15c.08 0 .17.01.26.03c.21.06.36.16.46.31s.15.31.15.47c0 .03-.01.08-.02.14s-.02.1-.02.12l-1.63 5.73c-.04.19-.13.35-.28.46s-.32.17-.51.17l-.24-.05a.8.8 0 0 1-.46-.32a.9.9 0 0 1-.14-.47" />
    </svg>`,

    Snow: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	    <path fill="currentColor" d="M7.46 14.41c0-.19.07-.36.2-.5a.63.63 0 0 1 .48-.21c.19 0 .36.07.49.21s.2.3.2.5c0 .19-.07.35-.2.48a.673.673 0 0 1-.96 0a.62.62 0 0 1-.21-.48m1.98 0c0-.19.07-.36.2-.5a.63.63 0 0 1 .48-.21h3.23l-2.28-2.28a.6.6 0 0 1-.21-.47c0-.19.07-.35.21-.49s.3-.21.49-.21s.35.07.49.21l2.27 2.27V9.52c0-.19.07-.36.21-.5s.3-.21.5-.21q.285 0 .48.21c.13.14.2.3.2.5v3.23l2.29-2.3q.21-.21.48-.21c.18 0 .35.07.49.21c.12.14.18.3.18.49s-.06.35-.18.47l-2.28 2.28h3.23c.18 0 .34.07.47.21s.2.3.2.5c0 .18-.07.34-.2.47a.65.65 0 0 1-.47.2h-3.23l2.29 2.29c.12.12.18.28.18.47s-.06.35-.18.49c-.14.14-.31.21-.49.21s-.35-.07-.48-.21l-2.29-2.3v3.24c0 .19-.07.36-.2.49s-.29.2-.48.2a.72.72 0 0 1-.5-.2a.65.65 0 0 1-.21-.49v-3.22l-2.27 2.27c-.14.14-.3.21-.49.21s-.35-.07-.49-.21s-.21-.3-.21-.49s.07-.34.21-.47l2.3-2.29h-3.24c-.19 0-.35-.07-.48-.2a.51.51 0 0 1-.22-.45m.01 4.84c0-.18.07-.35.21-.48c.12-.14.28-.21.47-.21s.35.07.49.21q.21.21.21.48c0 .18-.07.35-.21.48c-.14.14-.3.21-.49.21s-.35-.07-.47-.21a.63.63 0 0 1-.21-.48m0-9.71c0-.18.07-.35.21-.48c.12-.14.28-.21.47-.21s.35.07.49.21q.21.21.21.48c0 .27-.07.35-.21.49s-.3.21-.49.21s-.35-.07-.47-.21a.68.68 0 0 1-.21-.49m4.85 11.71c0-.18.07-.34.21-.47s.3-.2.5-.2c.19 0 .35.07.48.2s.2.29.2.47c0 .19-.07.36-.2.49s-.29.2-.48.2a.72.72 0 0 1-.5-.2a.64.64 0 0 1-.21-.49m0-13.71c0-.19.07-.36.21-.49s.3-.2.5-.2c.19 0 .35.07.48.2a.68.68 0 0 1-.48 1.16a.72.72 0 0 1-.5-.2a.62.62 0 0 1-.21-.47m4.87 11.71c0-.18.07-.35.21-.48c.12-.14.28-.21.47-.21s.35.07.49.21q.21.21.21.48c0 .18-.07.35-.21.48c-.14.14-.3.21-.49.21s-.35-.07-.47-.21a.63.63 0 0 1-.21-.48m0-9.71c0-.18.07-.35.21-.48c.12-.14.28-.21.47-.21s.35.07.49.21q.21.21.21.48c0 .27-.07.35-.21.49s-.3.21-.49.21s-.35-.07-.47-.21a.68.68 0 0 1-.21-.49m2 4.87c0-.19.07-.36.2-.5s.3-.21.49-.21c.18 0 .34.07.47.21s.2.3.2.5c0 .18-.07.34-.2.47a.68.68 0 0 1-.96 0a.65.65 0 0 1-.2-.47" />
    </svg>`,

    Mist: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	    <path fill="currentColor" d="M7.33 16.58c0-.23.08-.41.23-.56c.16-.15.37-.22.64-.22h5.71c.27 0 .48.07.64.22s.23.33.23.56c0 .27-.08.49-.23.64s-.37.23-.64.23H8.2c-.27 0-.48-.08-.64-.23s-.23-.36-.23-.64m0-5.91c0-.22.08-.41.23-.55c.16-.15.37-.22.64-.22h2.96c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24H8.2c-.27 0-.48-.08-.64-.23s-.23-.38-.23-.65m.99 8.87c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28c.26 0 .46.09.62.27s.24.38.24.61c0 .27-.08.49-.23.65s-.36.23-.63.23a.87.87 0 0 1-.61-.24c-.19-.17-.27-.38-.27-.64m1.42-5.93c0-.23.07-.44.22-.61q.225-.27.54-.27c.26 0 .48.09.64.27s.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.65.23c-.23 0-.41-.08-.55-.24s-.21-.37-.21-.64m.99 5.93a.87.87 0 0 1 .88-.88h3.83l.88.88c0 .26-.09.47-.27.64s-.38.24-.61.24h-3.83c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m1.32-5.93c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h3.83q.39 0 .63.27c.16.18.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.64.23h-3.83a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m.76-2.94c0-.22.08-.41.24-.55s.37-.22.64-.22h5.71c.23 0 .43.08.61.23q.27.225.27.54c0 .26-.09.48-.27.64s-.38.24-.61.24h-5.71c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m2.63 5.91c0-.21.09-.4.27-.55a.926.926 0 0 1 1.22 0a.7.7 0 0 1 .27.55q0 .39-.27.63c-.18.16-.38.24-.61.24a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m1.54 2.96c0-.23.08-.44.24-.61q.24-.27.63-.27h1.87c.26 0 .47.09.63.26s.24.38.24.62c0 .27-.08.49-.23.65s-.37.23-.64.23h-1.87c-.27 0-.48-.08-.64-.23c-.15-.16-.23-.38-.23-.65m.87-2.96c0-.21.09-.4.27-.55s.38-.23.61-.23h3.07c.22 0 .4.08.54.23s.22.33.22.55c0 .27-.07.48-.21.64s-.32.23-.55.23h-3.07a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m.44-2.97c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h1.96q.315 0 .54.27c.15.18.23.38.23.61c0 .27-.07.48-.22.64c-.14.16-.33.24-.55.24h-1.96a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m2.74-2.94c0-.22.07-.4.22-.55s.33-.22.55-.22c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24c-.23 0-.41-.08-.55-.24c-.15-.16-.22-.37-.22-.64" />
    </svg>`,
    Smoke: `images/mist.png`,
    Haze: `images/mist.png`,
    Dust: `images/mist.png`,
    Fog: `images/mist.png`,
    Sand: `images/mist.png`,
    Ash: `images/mist.png`,
    Squall: `images/mist.png`,
    Tornado: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	    <path fill="currentColor" d="M4.13 15.19q0 1.035 1.08 1.77c1.32.93 3.31 1.39 5.98 1.39c1.2 0 2.31-.1 3.34-.31c1.08-.23 1.97-.6 2.65-1.1s1.03-1.08 1.03-1.76c0-.21-.04-.41-.12-.62q2.085-.51 3.27-1.38c1.185-.87 1.19-1.25 1.19-2q0-.285-.09-.6c2.29-.81 3.43-1.9 3.43-3.28c0-.88-.5-1.66-1.49-2.34q-2.925-1.95-8.58-1.95c-1.78 0-3.39.16-4.83.47c-1.57.32-2.83.82-3.79 1.5S5.76 6.44 5.76 7.31c0 .52.16.99.48 1.42q-1.77 1.005-1.77 2.46c0 .75.37 1.41 1.1 1.98c-.96.56-1.44 1.23-1.44 2.02m.6 4.5c0 .73.45 1.31 1.35 1.72s2.04.62 3.41.62c1.39 0 2.53-.21 3.44-.62s1.36-.99 1.36-1.72c0-.27-.09-.5-.26-.69s-.4-.28-.67-.28c-.22 0-.42.08-.6.23s-.29.35-.34.57c-.2.16-.56.3-1.1.43s-1.15.2-1.83.2c-1.1 0-2-.16-2.68-.47c.16-.16.24-.36.26-.6s-.04-.45-.15-.62c-.16-.21-.36-.35-.61-.4s-.48 0-.7.13c-.59.41-.88.9-.88 1.5m1.28-4.5c0-.01.06-.07.19-.18c.09-.09.28-.2.56-.34s.61-.25.96-.35l.12-.06q2.43.81 5.67.81c.95 0 1.81-.05 2.58-.16l.26.23c-.09.16-.3.32-.63.5c-.4.21-1.02.41-1.86.57s-1.73.25-2.67.25s-1.83-.08-2.67-.25s-1.47-.36-1.88-.57q-.51-.21-.63-.45m.11 8.42c0 .63.36 1.12 1.08 1.46s1.61.51 2.67.51c1.08 0 1.99-.17 2.72-.51s1.1-.83 1.1-1.46c0-.25-.09-.48-.28-.67s-.41-.29-.66-.29c-.47 0-.78.24-.92.72c-.39.24-1.04.37-1.96.37c-.8 0-1.44-.12-1.92-.37c-.15-.48-.45-.72-.92-.72c-.25 0-.47.09-.64.28s-.27.41-.27.68m.21-12.42c0-.08.05-.17.15-.28c.24-.3.72-.6 1.42-.88c1.92 1.03 4.56 1.54 7.91 1.54c1.71 0 3.32-.16 4.82-.47v.09c0 .15-.09.3-.28.45c-.41.36-1.17.7-2.29 1.03q-1.815.54-4.56.54c-1.84 0-3.36-.18-4.57-.54c-1.16-.32-1.93-.66-2.32-1.02c-.19-.15-.28-.3-.28-.46m1.3-3.88c0-.18.12-.37.35-.59c.45-.42 1.35-.82 2.68-1.21c1.43-.42 3.14-.63 5.14-.63q3.015 0 5.19.63c1.35.39 2.24.8 2.68 1.22c.22.22.34.42.34.59s-.11.35-.34.56c-.44.42-1.33.83-2.68 1.23c-1.45.42-3.17.63-5.19.63c-2 0-3.72-.21-5.14-.63c-1.34-.4-2.24-.81-2.68-1.24c-.23-.21-.35-.39-.35-.56" />
    </svg>`,

    Clear: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	    <path fill="currentColor" d="M3.74 14.44c0 2.04.5 3.93 1.51 5.65s2.37 3.1 4.1 4.1S12.96 25.7 15 25.7s3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1s1.51-3.61 1.51-5.65s-.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09S17.04 3.19 15 3.19s-3.92.51-5.65 1.51s-3.1 2.37-4.1 4.09s-1.51 3.61-1.51 5.65" />
    </svg>`,

    Clouds: {
        few_clouds: {
            day_clouds: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	            <path fill="currentColor" d="M1.56 16.9q0 1.35.66 2.49c.66 1.14 1.04 1.36 1.8 1.8s1.58.66 2.47.66h10.83c.89 0 1.72-.22 2.48-.66s1.37-1.04 1.81-1.8s.67-1.59.67-2.49c0-.66-.14-1.33-.42-2c.76-.92 1.14-2.03 1.14-3.3c0-.71-.14-1.39-.41-2.04s-.65-1.2-1.12-1.67s-1.02-.85-1.67-1.12c-.65-.28-1.33-.41-2.04-.41c-1.48 0-2.77.58-3.88 1.74q-1.155-.66-2.7-.66c-1.41 0-2.65.44-3.73 1.31a5.8 5.8 0 0 0-2.08 3.35c-1.12.26-2.03.83-2.74 1.73s-1.07 1.92-1.07 3.07m1.71 0c0-.84.28-1.56.84-2.17s1.26-.96 2.1-1.06l.5-.03c.12 0 .19-.06.19-.18l.07-.54c.14-1.08.61-1.99 1.41-2.71c.8-.73 1.74-1.09 2.81-1.09c1.1 0 2.06.37 2.87 1.1a4 4 0 0 1 1.37 2.71l.07.58c.02.11.09.17.21.17h1.61q1.32 0 2.28.96c.64.64.96 1.39.96 2.27c0 .91-.32 1.68-.95 2.32s-1.4.96-2.28.96H6.49c-.88 0-1.63-.32-2.27-.97c-.63-.65-.95-1.42-.95-2.32m6.7-12.27q0 .36.24.63l.66.64c.25.19.46.27.64.25c.21 0 .39-.09.55-.26s.24-.38.24-.62s-.09-.44-.26-.59l-.59-.66a.9.9 0 0 0-.61-.24c-.24 0-.45.08-.62.25c-.17.16-.25.36-.25.6m5.34 4.43c.69-.67 1.51-1 2.45-1c.99 0 1.83.34 2.52 1.03s1.04 1.52 1.04 2.51c0 .62-.17 1.24-.51 1.84c-.97-.96-2.13-1.44-3.49-1.44H17c-.25-1.09-.81-2.07-1.69-2.94m1.63-5.28c0 .26.08.46.23.62s.35.23.59.23c.26 0 .46-.08.62-.23c.16-.16.23-.36.23-.62V1.73c0-.24-.08-.43-.24-.59s-.36-.23-.61-.23c-.24 0-.43.08-.59.23s-.23.35-.23.59zm5.52 2.29c0 .26.07.46.22.62c.21.16.42.24.62.24c.18 0 .38-.08.59-.24l1.43-1.43c.16-.18.24-.39.24-.64q0-.36-.24-.6a.8.8 0 0 0-.59-.24c-.24 0-.43.08-.58.24l-1.47 1.43c-.15.19-.22.39-.22.62m.79 11.84c0 .24.08.45.25.63l.65.63c.15.16.34.24.58.24s.44-.08.6-.25a.86.86 0 0 0 .24-.62c0-.22-.08-.42-.24-.58l-.65-.65a.78.78 0 0 0-.57-.24q-.36 0-.6.24c-.17.16-.26.36-.26.6m1.47-6.31c0 .23.09.42.26.58c.16.16.37.24.61.24h2.04c.23 0 .42-.08.58-.23s.23-.35.23-.59s-.08-.44-.23-.6s-.35-.25-.58-.25h-2.04c-.24 0-.44.08-.61.25a.8.8 0 0 0-.26.6" />
            </svg>`,
            night_clouds: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	            <path fill="currentColor" d="M4.14 16.9c0-1.16.35-2.18 1.06-3.08s1.62-1.47 2.74-1.72c.23-1.03.7-1.93 1.4-2.7a5.93 5.93 0 0 1 2.53-1.65c.62-.21 1.26-.32 1.93-.32c.81 0 1.6.16 2.35.48c.28-.47.61-.88.99-1.22s.77-.61 1.17-.79s.8-.32 1.18-.41s.76-.13 1.12-.13c.38 0 .79.05 1.23.16l.82.25c.14.06.18.13.14.22l-.14.6c-.07.31-.1.6-.1.86c0 .31.05.63.15.95s.24.63.44.94c.19.31.46.58.8.83s.72.44 1.15.57l.62.22c.1.03.15.08.15.16c0 .02-.01.04-.02.07l-.18.67c-.27 1.08-.78 1.93-1.5 2.57c.4.7.62 1.45.65 2.24c.01.05.01.12.01.23c0 .89-.22 1.72-.67 2.48c-.44.76-1.05 1.36-1.8 1.8c-.76.44-1.59.67-2.48.67H9.07c-.89 0-1.72-.22-2.48-.67s-1.35-1.05-1.79-1.8s-.66-1.58-.66-2.48m1.71 0q0 1.335.96 2.31c.64.65 1.39.98 2.26.98h10.81c.89 0 1.65-.32 2.28-.97s.95-1.42.95-2.32c0-.88-.32-1.63-.96-2.26s-1.4-.95-2.28-.95h-1.78l-.1-.75c-.1-1.01-.52-1.88-1.26-2.59s-1.62-1.11-2.63-1.2c-.03 0-.08 0-.15-.01s-.11-.01-.15-.01c-.51 0-1.02.1-1.54.29V9.4c-.73.28-1.35.74-1.84 1.37c-.5.63-.8 1.35-.9 2.17l-.07.72l-.68.03c-.84.1-1.54.45-2.1 1.06s-.82 1.32-.82 2.15M17.6 8.79c1.06.91 1.72 1.97 1.97 3.18h.32c1.24 0 2.3.39 3.17 1.18c.33-.31.58-.67.76-1.07a4.95 4.95 0 0 1-2.16-1.97c-.52-.88-.79-1.81-.79-2.78v-.24c-.05-.01-.13-.01-.24-.01c-.58-.01-1.15.13-1.7.44c-.55.3-1 .72-1.33 1.27" />
            </svg>`,
        },
        scattered_clouds: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	        <path fill="currentColor" d="M4.61 16.88c0-1.15.36-2.17 1.08-3.07s1.63-1.48 2.74-1.73c.31-1.37 1.02-2.49 2.11-3.37s2.35-1.32 3.76-1.32c1.38 0 2.61.43 3.69 1.28s1.78 1.95 2.1 3.29h.33c.9 0 1.73.22 2.49.65s1.37 1.03 1.81 1.79s.67 1.58.67 2.48a4.94 4.94 0 0 1-2.36 4.25c-.73.45-1.54.69-2.41.72H9.41c-1.34-.06-2.47-.57-3.4-1.53c-.93-.95-1.4-2.1-1.4-3.44m1.71 0c0 .87.3 1.62.9 2.26s1.33.98 2.19 1.03H20.6c.86-.04 1.59-.39 2.19-1.03c.61-.64.91-1.4.91-2.26c0-.88-.33-1.63-.98-2.27s-1.42-.96-2.32-.96h-1.6c-.11 0-.17-.06-.17-.18l-.07-.57c-.11-1.08-.58-1.99-1.4-2.72s-1.77-1.1-2.86-1.1s-2.05.37-2.85 1.1c-.81.73-1.27 1.64-1.37 2.72l-.08.57c0 .12-.07.18-.2.18h-.53c-.84.1-1.54.46-2.1 1.07s-.85 1.33-.85 2.16" />
        </svg>`,
        all_clouds: `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
	        <path fill="currentColor" d="M3.89 17.6c0-.99.31-1.88.93-2.65s1.41-1.27 2.38-1.49c.26-1.17.85-2.14 1.78-2.88c.93-.75 2-1.12 3.22-1.12c1.18 0 2.24.36 3.16 1.09c.93.73 1.53 1.66 1.8 2.8h.27c1.18 0 2.18.41 3.01 1.24s1.25 1.83 1.25 3c0 1.18-.42 2.18-1.25 3.01s-1.83 1.25-3.01 1.25H8.16c-.58 0-1.13-.11-1.65-.34s-.99-.51-1.37-.89s-.68-.84-.91-1.36s-.34-1.09-.34-1.66m1.45 0c0 .76.28 1.42.82 1.96s1.21.82 1.99.82h9.28c.77 0 1.44-.27 1.99-.82s.83-1.2.83-1.96s-.27-1.42-.83-1.96c-.55-.54-1.21-.82-1.99-.82h-1.39q-.15 0-.15-.15l-.07-.49c-.1-.94-.5-1.73-1.19-2.35s-1.51-.93-2.45-.93s-1.76.31-2.46.94c-.7.62-1.09 1.41-1.18 2.34l-.07.42c0 .1-.05.15-.16.15l-.45.07c-.72.06-1.32.36-1.81.89c-.46.53-.71 1.16-.71 1.89m8.85-8.72c-.1.09-.08.16.07.21c.43.19.79.37 1.08.55c.11.03.19.02.22-.03c.61-.57 1.31-.86 2.12-.86s1.5.27 2.1.81c.59.54.92 1.21.99 2l.09.64h1.42c.65 0 1.21.23 1.68.7s.7 1.02.7 1.66c0 .6-.21 1.12-.62 1.57s-.92.7-1.53.77c-.1 0-.15.05-.15.16v1.13c0 .11.05.16.15.16c1.01-.06 1.86-.46 2.55-1.19s1.04-1.6 1.04-2.6c0-1.06-.37-1.96-1.12-2.7c-.75-.75-1.65-1.12-2.7-1.12h-.15c-.26-1-.81-1.82-1.65-2.47c-.83-.65-1.77-.97-2.8-.97c-1.4-.01-2.57.52-3.49 1.58" />
        </svg>`,
    },
};

// const card = document.getElementById("card");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const weatherIconContainer = document.querySelector(".weather-icon-container");
let allWeatherData;

// This function will run whenever the page loads
window.addEventListener("load", async () => {
    // createOverlayAndLoader();
    // createWeatherInfoCard();
    allWeatherData = await sendDataToBacked("Godda");
    if (allWeatherData === null) {
        console.log("Error occured");
    } else {
        updateWeatherInfo(allWeatherData);
    }

    // if (allWeatherData === 404) {
    //     errorTemplate("images/error.png", "404 Error Occured!");
    // } else {
    //     if (numberOfChildren() === 2) {
    //         deleteWeatherInfo();
    //     }

    //     // createCityAndTemp();
    //     // getDateAndTime();
    //     // updateCityAndTemp(allWeatherData);
    // }
    // deleteOverlayAndLoader();
});

// ============== EVENT LISTENERS ==============

searchBtn.addEventListener("click", async () => {
    allWeatherData = await sendDataToBacked(cityName.value);
    updateWeatherInfo(allWeatherData);
});

// ============== FUNCTIONS ==============

function capilazeWeatherDescription(description) {
    return description
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function updateWeatherInfo(weatherInfo) {
    console.log("This is weather info", weatherInfo);
    const weatherMain = weatherInfo.weather[0].main;
    console.log("This is weather main", weatherMain);
    const weatherDescription = weatherInfo.weather[0].description;

    // Update the weather icon based on the weather condition
    if (weatherMain === "Clouds") {
        if (weatherDescription === "few clouds") {
            weatherIconContainer.innerHTML =
                weatherSvgs.Clouds.few_clouds.day_clouds;
        } else if (weatherDescription === "scattered clouds") {
            weatherIconContainer.innerHTML =
                weatherSvgs.Clouds.scattered_clouds;
        } else {
            weatherIconContainer.innerHTML = weatherSvgs.Clouds.all_clouds;
        }
    } else if (
        [
            "Snow",
            "Mist",
            "Smoke",
            "Haze",
            "Dust",
            "Fog",
            "Sand",
            "Ash",
            "Squall",
        ].includes(weatherMain)
    ) {
        weatherIconContainer.innerHTML = weatherSvgs.Snow;
    } else {
        // console.log(weatherMain);
        weatherIconContainer.innerHTML = weatherSvgs[weatherMain];
    }

    document.querySelector(".temp").innerHTML = `${Math.round(
        weatherInfo.main.temp
    )}&deg;C`;

    document.getElementById(
        "sky-status"
    ).innerText = `${capilazeWeatherDescription(
        weatherInfo.weather[0].description
    )}`;

    document.getElementById(
        "location"
    ).innerText = `${weatherInfo.name}, ${weatherInfo.sys.country}`;

    document.getElementById("wind-speed").innerHTML = `${Math.round(
        weatherInfo.wind.speed
    )}km/s`;

    document.getElementById(
        "humidity"
    ).innerText = `${weatherInfo.main.humidity}%`;

    document.getElementById("real-feel").innerHTML = `${Math.round(
        weatherInfo.main.feels_like
    )}&deg;C`;

    document.getElementById("aqi").innerText = `${weatherInfo.aqi}`;

    document.getElementById(
        "pressure"
    ).innerText = `${weatherInfo.main.pressure}`;

    document.getElementById("visibility").innerText = `${
        weatherInfo.visibility / 1000
    }km`;

    document.getElementById("temp-min").innerHTML = `Min: ${Math.round(
        weatherInfo.main.temp_min
    )}&deg;C`;
    document.getElementById("temp-max").innerHTML = `Max: ${Math.round(
        weatherInfo.main.temp_min
    )}&deg;C`;
    document.getElementById("sun-rise-set").innerText = "No Data";
}

/*
    This function will create something like this
    <div class="city-temp"></div>
*/
// const createWeatherInfoCard = () => {
//     const cityTemp = document.createElement("div");
//     cityTemp.classList.add("city-temp");
//     card.appendChild(cityTemp);
// };

// // This function triggers when the input field is clicked
// const cityName = document.getElementById("city-name");
// cityName.addEventListener("click", () => {
//     cityName.classList.add("click-animation");

//     document.body.addEventListener("click", (evt) => {
//         if (!cityName.contains(evt.target)) {
//             cityName.classList.remove("click-animation");
//         }
//     });
// });

// const months = {
//     0: "January",
//     1: "February",
//     2: "March",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "August",
//     8: "September",
//     9: "October",
//     10: "November",
//     11: "December",
// };

// // This function updates the current date and time
// const getDateAndTime = () => {
//     const currDate = new Date();
//     const date = currDate.getDate();
//     const month = currDate.getMonth();
//     let hour = currDate.getHours();
//     const ampm = hour >= 12 ? "pm" : "am";
//     hour = hour % 12 || 12;
//     const minute = currDate.getMinutes();

//     const dateTime = document.querySelector(".date-time");
//     dateTime.innerText = `${months[month].slice(
//         0,
//         3
//     )} ${date}, ${hour}:${minute}${ampm}`;

//     return dateTime;
// };

// /*
//     This function will return the number of child element
//     stored inside the weather info card
// */
// const numberOfChildren = () => {
//     const cityTemp = document.querySelector(".city-temp");
//     const numberOfChild = cityTemp.children.length;
//     return numberOfChild;
// };

// // This triggers when the search button is clicked
// searchBtn.addEventListener("click", async () => {
//     if (cityName.value.trim() !== "") {
//         createOverlayAndLoader();
//         const allWeatherData = await sendDataToBacked(cityName.value);
//         deleteOverlayAndLoader();
//         if (allWeatherData === 404) {
//             deleteWeatherInfo();
//             errorTemplate("images/error.png", "404 Error Occured!");
//         } else if (allWeatherData.cod === 200) {
//             if (numberOfChildren() === 2) {
//                 deleteCityNotFoundTemplate();
//                 createCityAndTemp();
//                 getDateAndTime();
//                 updateCityAndTemp(allWeatherData);
//             } else {
//                 getDateAndTime();
//                 updateCityAndTemp(allWeatherData);
//             }
//         } else {
//             deleteWeatherInfo();
//             errorTemplate("images/404-error.png", "City Not Found!");
//         }
//     }
// });

// /*
//     This function will create the child elements which will be stored
//     inside the weather info card.

//     This function will create something like this:

//     <span class="date-time">Date, Time</span>
//     <h2 class="city">City, Country</h2>
//     <div class="curr-temp">
//         <div class="svg">
//             <img src="images/clear_sky.svg" />
//         </div>
//         <span class="temp">Temperature</span>
//     </div>
//     <span class="feels-like">Feels like 35&deg;C. Clear sky.</span>
// */
// const createCityAndTemp = () => {
//     const dateTime = document.createElement("span");
//     dateTime.classList.add("date-time");

//     const city = document.createElement("h2");
//     city.classList.add("city");

//     const currTemp = document.createElement("div");
//     currTemp.classList.add("curr-temp");

//     const svg = document.createElement("div");
//     svg.classList.add("svg");

//     const img = document.createElement("img");

//     const temp = document.createElement("span");
//     temp.classList.add("temp");

//     svg.appendChild(img);
//     currTemp.appendChild(svg);
//     currTemp.appendChild(temp);

//     const feelsLike = document.createElement("span");
//     feelsLike.classList.add("feels-like");

//     const cityTemp = document.querySelector(".city-temp");

//     cityTemp.appendChild(dateTime);
//     cityTemp.appendChild(city);
//     cityTemp.appendChild(currTemp);
//     cityTemp.appendChild(feelsLike);
// };

// /*
//     This function will delete the child elements which is stored
//     inside the weather info card
// */
// const deleteWeatherInfo = () => {
//     const cityTemp = document.querySelector(".city-temp");
//     while (cityTemp.firstChild) {
//         cityTemp.removeChild(cityTemp.firstChild);
//     }
// };

// /*
//     This function will run either when the city does not exist or
//     when there is some problem going on in the backend server
// */
// const errorTemplate = (image, text) => {
//     const cityTemp = document.querySelector(".city-temp");
//     cityTemp.classList.add("city-not-exist");

//     const errorLogoContainer = document.createElement("div");
//     errorLogoContainer.classList.add("error-logo-container");
//     const errorLogo = document.createElement("img");
//     errorLogo.classList.add("error-logo");
//     errorLogo.src = image;
//     errorLogoContainer.appendChild(errorLogo);
//     cityTemp.appendChild(errorLogoContainer);

//     const h3 = document.createElement("h3");
//     h3.innerText = text;
//     cityTemp.appendChild(h3);
// };

// const deleteCityNotFoundTemplate = () => {
//     const cityTemp = document.querySelector(".city-temp");
//     cityTemp.classList.remove("city-not-exist");
//     deleteWeatherInfo();
// };

// // This function updates the weather inforation
// const updateCityAndTemp = (weatherInfo) => {
//     const city = document.querySelector(".city");
//     const img = document.querySelector("img");
//     img.classList.add("weather-logo");
//     const temp = document.querySelector(".temp");
//     const feelsLike = document.querySelector(".feels-like");
//     city.innerText = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
//     temp.innerText = `${Math.round(weatherInfo.main.temp)}°C`;
//     feelsLike.innerText = `Feels like ${Math.round(
//         weatherInfo.main.feels_like
//     )}°C. ${weatherInfo.weather[0].description}.`;

//     if (weatherInfo.weather[0].main === "Thunderstorm") {
//         img.src = "images/thunderstorm.png";
//     } else if (weatherInfo.weather[0].main === "Drizzle") {
//         img.src = "images/drizzle.png";
//     } else if (weatherInfo.weather[0].main === "Rain") {
//         img.src = "images/rain.png";
//     } else if (weatherInfo.weather[0].main === "Snow") {
//         img.src = "images/snow.png";
//     } else if (weatherInfo.weather[0].main === "Clear") {
//         img.src = "images/clear_sky.png";
//     } else if (weatherInfo.weather[0].main === "Clouds") {
//         img.src = "images/clouds.png";
//     } else {
//         img.src = "images/mist.png";
//     }
// };

// // This function creates the overlay and loader functionality
// const createOverlayAndLoader = () => {
//     const card = document.getElementById("card");
//     const overlay = document.createElement("div");
//     overlay.classList.add("overlay");
//     const loader = document.createElement("div");
//     loader.classList.add("loader");
//     card.appendChild(overlay);
//     card.appendChild(loader);
// };

// // This functions deletes the overlay and loader functionality
// const deleteOverlayAndLoader = () => {
//     try {
//         const overlay = document.querySelector(".overlay");
//         overlay.remove();
//     } catch (error) {}

//     try {
//         const loader = document.querySelector(".loader");
//         loader.remove();
//     } catch (error) {}
// };

// This function sends data to the backend
const sendDataToBacked = async (city) => {
    const data = {
        cityName: city,
    };

    try {
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        return 404;
    }
};

// https://weather-app-6h2o.onrender.com/
// http://localhost:3000/
