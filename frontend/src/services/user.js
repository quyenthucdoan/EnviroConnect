import { request } from "../configs/axios"

const getUserById = async (id) => {
	return request({ method: "GET", url: `/users/${id}` })
}

const getAllBuddies = async (id) => {
    return request({ method: "GET", url: `/users/${id}/near-buddies` })
}

export { getAllBuddies, getUserById }

