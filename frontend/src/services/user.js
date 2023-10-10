import { request } from "../configs/axios"

const getUserById = async (id) => {
	return request({ method: "GET", url: `/users/${id}` })
}

export { getUserById }
