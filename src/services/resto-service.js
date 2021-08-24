export default class RestoService {
    _apiBase = 'http://localhost:3000'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}` + 
            `, received ${res.status}`);
        }

        return await res.json();
    }

    async getMenuItems () {
        return await this.getResource(`/menu/`)
    }

    async getItems(id) {
        const res = await this.getResource('/menu/')
        const item = res.find((e1) => {
            return e1.id === +id;
        })
        return item;
    }
}