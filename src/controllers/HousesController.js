import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";




export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/search', this.searchHouses)
            .get('/:houseId', this.getHouseById)
    }

    // NOTE /:houseId ---- the : is a placeholder



    // NOTE localhost:3000/api/houses

    async getHouses(request, response, next) {
        try {
            const houses = await housesService.getHouses()
            logger.log("Get Houses Working", houses)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    //NOTE localhost:3000/api/houses/search?bedrooms=6

    async searchHouses(request, response, next) {
        try {
            const searchQuery = request.query
            const houses = await housesService.searchHouses(searchQuery)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    // NOTE localhost:3000/api/houses/661318b62b884e1a68f4546d

    async getHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            logger.log('params', request.params)
            const house = await housesService.getHouseById(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }





}