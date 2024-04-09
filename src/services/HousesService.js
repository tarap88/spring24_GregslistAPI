import { dbContext } from "../db/DbContext.js";


class HousesService {
    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }


    async searchHouses(searchQuery) {
        _queryBuilder(searchQuery)
        const houses = await dbContext.Houses.find(searchQuery)
        return houses
    }


    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) throw new Error(`No house with id: ${houseId}`)
        return house
    }
}



function _queryBuilder(searchQuery) {

    if (searchQuery.like) {

        let regex = new RegExp(searchQuery.like, 'i')

        searchQuery.description = { $regex: regex }

        delete searchQuery.like
    }

}

















export const housesService = new HousesService()