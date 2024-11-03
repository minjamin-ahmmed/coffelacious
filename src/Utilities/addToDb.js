import toast from "react-hot-toast"

const getStoredReadList = () => {

    const storedListStr = localStorage.getItem('coffee-list')

    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }
}


const addStoredReadList = (id) => {
    const storedList = getStoredReadList()

    if(storedList.includes(id)){
        toast.error('This Coffee is Already Exist!');
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('coffee-list', storedListStr)
        toast.success("Added Successfully")
    }
}

export{addStoredReadList, getStoredReadList}