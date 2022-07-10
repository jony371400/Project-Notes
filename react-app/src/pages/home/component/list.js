import ITEM from './item'

const List = ({ ListData, DeleteData }) => {

    // console.log('ListData : ' , ListData)
    // console.log('DeleteData : ' , DeleteData)
    // console.log('Type ListData : ' , typeof(ListData))
    // console.log('Type DeleteData : ' , typeof(DeleteData))

    return <div className="list">
        {
            ListData.map((item) => {
                
                // console.log('ITEM : ' , item)

                const { id, note, date, time } = item

                // console.log('ID : ' , id)
                // console.log('NOTE : ' , note)
                // console.log('DATE : ' , date)
                // console.log('TIME : ' , time)

                // console.log('Type ID : ' , typeof(id))
                // console.log('Type NOTE : ' , typeof(note))
                // console.log('Type DATE : ' , typeof(date))
                // console.log('Type TIME : ' , typeof(time))

                return <ITEM
                    key={id}
                    id={id}
                    note={note}
                    date={date}
                    time={time}
                    deleteData={DeleteData}>
                </ITEM>
            })
        }
    </div>
}

export default List