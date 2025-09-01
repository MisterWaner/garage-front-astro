export type Link = {
    href: string;
    label: string;
};

export type Review = {
    author: string;
    title: string;
    rating: number;
    comment: string;
};

export type Car = {
    immatriculation: string;
    marque: string;
    model: string;
    annee: number;
    kilometrage: number;
    couleur: string;
    carburant: string;
    prix: number;
    transmission: string;
    images: string[]
    status: string;
};
