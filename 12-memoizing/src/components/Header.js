import React from 'react'

function Header({ number, increment}) {
  return (
    <div>
        Header - {number}
        <br />
        <button onClick={increment}>Click</button>

    </div>
  )
}

export default React.memo(Header);  //başka component render edildiğinde bu component in render edilmemesi için