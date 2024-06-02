import React, { useEffect, useState } from 'react'
import axios from 'axios'

function MovieApi() {
	let[book,setBook] = useState([])
	
	useEffect(()=>{
		axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json")
		.then(res=> setBook(res.status))
		
		console.log(book);
	},[])
  return (
	<div>
		
		<table>
		<tr><th>Author</th><th>Language</th></tr>
	  {book.map((v,i,a)=>(
		
           <tr><td>{v.author}</td><td>{v.language}</td></tr>
		  
	  ))}
	  </table>
	</div>
  )
}

export default MovieApi
