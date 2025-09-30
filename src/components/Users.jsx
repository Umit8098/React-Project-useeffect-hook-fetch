import { useState, useEffect } from 'react';

const Users = () => {

    const[users, setUsers] = useState([]); // kullanıcıları tutacak state
    // boş array ile başlatıyoruz, çünkü map() kullanacağız, eğer boş array vermezsek hata verir.

    const getUsers = () => {
        // kullanıcıları çek
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data)) // veriyi users değişkenine atıyoruz.
            .catch(error => console.log(error)) // hata varsa konsola yazdır.
    }

    useEffect(() => {
        //?componentDidMount
        getUsers(); //! component yüklendiğinde kullanıcıları çek.
    }, []); //! boş array ile sadece component mount olduğunda çalışır.

    console.log(users); // çekilen kullanıcıları konsolda görüntüle.
    
    return (
    <div>
        <h1 className='text-success fw-bold'>USER LIST</h1>

        {/* <button  
            className="btn btn-primary mb-3" 
            onClick={getUsers}>Get Users
        </button> */}

        <div className="row">
                {/* Eğer users değişkeninde veri varsa map ile dön, yoksa dönme. */}
                {users && users.map((user) => {
                    const {id, name} = user;
                    return (
                        <div className="col" key={id}>
                            <img src={`https://i.pravatar.cc/300?img=${id}`} alt="resim" />
                            <h6>{name}</h6>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Users