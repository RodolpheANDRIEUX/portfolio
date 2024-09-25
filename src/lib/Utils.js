export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export const UNSPLASH_ACCESS_KEY = "CnOveAGNF9nnT3SATZes_Mwx0wAzCaLMgsWYHs-EEq4";