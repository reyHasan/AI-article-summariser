import React from 'react'
import {copy, linkIcon, loader, tick} from '../assets'
import {useSelector} from 'react-redux'
import {useLazyGetSummaryQuery} from '../redux/article'
import parse from 'html-react-parser'

const Demo = () => {
    
  
    const [article, setArticle] = React.useState({url: '', summary: '', paragraphs:3})
    const [allArticles, setAllArticles] = React.useState([])
    const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery()
    const userName = useSelector(state=> state.user.name)
    const [suggestions, setSuggestions] = React.useState(false)

   React.useEffect(()=> {
    const articlesFromLocalStorage=JSON.parse(localStorage.getItem('articles'))
    if (articlesFromLocalStorage) {setAllArticles(articlesFromLocalStorage)}
   }, [])

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const {data} = await getSummary({articleUrl: article.url, length: article.paragraphs})
        if (data) {
        const newArticle = {...article, summary: data?.summary}    
        const updatedHistory = [newArticle, ...allArticles] 
        setArticle (newArticle) 
        setAllArticles(updatedHistory)
        localStorage.setItem('articles', JSON.stringify(updatedHistory))
        }
      }
       

   
    return (
<>

    <section className={`w-full mt-6`}>

    <div className='w-full'>
              <h3 className='mt-6 px-4 inline-block mx-auto text-2xl font-semibold mb-4'>{userName? `${userName}'s history` : 'Browser history'}</h3>
              {allArticles.length===0 && <p className='my-2 px-4'>No history</p>}
              { allArticles.filter((article, index)=>index<5).map((article, index)=> <p key={index} onClick={()=>setArticle(article)} className=' px-4 py-6 bg-white border-b border-blue-500 border-solid truncate'>{article.url}</p>)}
              {allArticles.length>0 && <button className='black_btn mt-4' onClick={()=>{localStorage.clear(), setArticle(prev=>({...article, url:'', summary:''})), setAllArticles(allArticles=>[])}}>Clear history</button>}
             </div>

        <form className='w-full flex fex-row bg-white p-3 mt-10 justify-between items-center'
         onSubmit={handleSubmit}>

             <div className='flex flex-row flex-1'>
               <img src={linkIcon} alt='link icon' className='px-4 self-start'/>
               <input
                 type='url'
                 placeholder='paste the article link here'
                 value={article.url}
                 onChange={(e)=> {setArticle({...article, url: e.target.value}), setSuggestions(false)}}
                 onFocus={()=>{setSuggestions(true)}}
                 className='flex-1 mr-2'
               />
                </div>
        
            <button className='black_btn'>
               submit
            </button>
        </form>      

       <div className='relative top-[-5px] mx-8'>
       {suggestions && allArticles.filter((article, index)=>index<8).map((article, index)=> <p key={index} onClick={()=>{setArticle(article), setSuggestions(false)}} className=' px-4 py-4 bg-white border-b border-blue-500 border-solid truncate'>{article.url}</p>)}
      </div> 
        
            <div>

            <div className='w-full'>
             {isFetching? <img src={loader} className='mx-auto my-6 w-20 h-20 object-contain'/> : error && <p>There is an error, something went wrong</p>}
              
              {article.summary && !isFetching && 
              <>
              <h3 className=' py-6 px-4 inline-block mx-auto text-3xl font-semibold'>Summarized Content</h3>
              <div className='font-inter px-4'> {parse(article.summary)}  </div> 
              </>
            }
              </div>
  

             </div> 
    
     </section>

     </>
    )
}

export default Demo
