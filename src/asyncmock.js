const zapatillas = [
    {
        id: "1",
        nombre: "Adidas Duramo Sl 2.0",
        precio: 31999,
        img: "https://http2.mlstatic.com/D_NQ_NP_815844-MLA51457678304_092022-O.webp",
        category_id: "AD",
        marca: "Adidas",
    },
    {
        id: "2",
        nombre: "Adidas Runfalcon 2.0",
        precio: 25699,
        img: "https://http2.mlstatic.com/D_NQ_NP_741402-MLA49643415091_042022-O.webp",
        category_id: "AD",
        marca: "Adidas",
    },
    {
        id: "3",
        nombre: "Adidas Advantage",
        precio: 23699,
        img: "https://http2.mlstatic.com/D_NQ_NP_955430-MLA48330413473_112021-O.webp",
        category_id: "AD",
        marca: "Adidas",
    },
    {
        id: "4",
        nombre: "Topper Tie Break III",
        precio: 15158,
        img: "https://http2.mlstatic.com/D_NQ_NP_763169-MLA49129517558_022022-O.webp",
        category_id: "TOP",
        marca: "Topper",
    },
    {
        id: "5",
        nombre: "Topper Fast",
        precio: 16999,
        img: "https://http2.mlstatic.com/D_NQ_NP_945603-MLA47711043285_092021-O.webp",
        category_id: "TOP",
        marca: "Topper",
    },
    {
        id: "6",
        nombre: "Topper Boro II",
        precio: 14700,
        img: "https://http2.mlstatic.com/D_NQ_NP_731302-MLA49200679366_022022-O.webp",
        category_id: "TOP",
        marca: "Topper",
    },
    {
        id: "7",
        nombre: "Nike W Revolution 6",
        precio: 29999,
        img: "https://http2.mlstatic.com/D_NQ_NP_678526-MLA54338232169_032023-O.webp",
        category_id: "NK",
        marca: "Nike",
    },
    {
        id: "8",
        nombre: "Nike Flex Experience Run 11",
        precio: 29999,
        img: "https://http2.mlstatic.com/D_NQ_NP_658696-MLA54339618088_032023-O.webp",
        category_id: "NK",
        marca: "Nike",
    },
    {
        id: "9",
        nombre: "Nike Downshifter 12",
        precio: 32999,
        img: "https://http2.mlstatic.com/D_NQ_NP_841812-MLA54339407334_032023-O.webp",
        category_id: "NK",
        marca: "Nike",
    },
    {
        id: "10",
        nombre: "Reebok Classic Leather",
        precio: 37323,
        img: "https://http2.mlstatic.com/D_NQ_NP_762845-MLA68825704610_042023-O.webp",
        category_id: "RB",
        marca: "Reebok",
    },
    {
        id: "11",
        nombre: "Reebok Energen Lite",
        precio: 26513,
        img: "https://http2.mlstatic.com/D_NQ_NP_606435-MLA54795945586_042023-O.webp",
        category_id: "RB",
        marca: "Reebok",
    },
    {
        id: "12",
        nombre: "Reebok Flexagon Energy Tr 3.0",
        precio: 25416,
        img: "https://http2.mlstatic.com/D_NQ_NP_689726-MLA51810939052_102022-O.webp",
        category_id: "RB",
        marca: "Reebok",
    },
];

export const getZapatillas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(zapatillas);
        }, 100);
    });
};

export const getUnaZapatilla = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const zapatilla = zapatillas.find((item) => item.id === id);
            resolve(zapatilla);
        }, 100);
    });
};

export const getZapatillasPorMarca = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const marcaZapatillas = zapatillas.filter(
                (marca) => marca.category_id === idCategoria
            );
            resolve(marcaZapatillas);
        }, 100);
    });
};

export const formatearPeso = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
});
