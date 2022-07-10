const Item = ({ id , note, date, time, deleteData }) => {

    // console.log('ID : ' , id)
    // console.log('NOTE : ' , note)
    // console.log('DATE : ' , date)
    // console.log('TIME : ' , time)
    // console.log('DELETEDATA : ' , deleteData)


    // console.log('Type ID : ' , typeof(id))
    // console.log('Type NOTE : ' , typeof(note))
    // console.log('Type DATE : ' , typeof(date))
    // console.log('Type TIME : ' , typeof(time))
    // console.log('Type DELETEDATA : ' , typeof(deleteData))
    
    function deleteItem() {

        deleteData((preData) => {

            // console.log('preData : ', preData)
            // console.log('Type preData : ', typeof(preData))

            return preData.filter(item => item.id !== id)
        })

    }

    return <div className="item-div">
        
        <div className="item-content">
        </div>
            <p>{note} -  {`${date} ${time}`}</p>

        <div className="item-btn">
            <button 
                className="removebtn" 
                onClick={deleteItem}>
                    Delete
            </button>
        </div>
    
    </div>
}

export default Item