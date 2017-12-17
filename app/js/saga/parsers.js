import { Map, List } from 'immutable'
import { ITEM_TITLE, ITEM_ID } from 'constants/common'

export const fromArrayOrStringToList = item =>
    (
        typeof item === 'string' && List([item])
    )
    || (
        item && List(item)
    )
    || List()

export const parseSingleItemResponse = item => (item && Map({
    [ITEM_ID]: item['id'],
    [ITEM_TITLE]: fromArrayOrStringToList(item['title'])
})) || Map()

export const parseArrayDataResponse = data => (data && data.length && List(data.map(item =>
    parseSingleItemResponse(item)
))) || List()
