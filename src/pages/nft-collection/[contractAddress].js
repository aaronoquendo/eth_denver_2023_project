import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router"; // Router

import { getCollection } from "../../redux/actions";


const NFTCollectionPage = () => {
  const dispatch = useDispatch()
  const collection = useSelector((state) => state.collection);
  const router = useRouter();
  const { contractAddress } = router.query;
  console.log("contractAddressss", contractAddress)
  useEffect(() => {
    if (contractAddress) {
      dispatch(getCollection({
        contractAddress: contractAddress,
        chainId: 1
      }))
    }

  }, [contractAddress])
  console.log("collection", collection);
  return (
    <div className='NFTCollectionPage'>
      <div class="row">


        {collection && collection.assets && collection.assets.map((token, index) => {
          return (
          <div class="col-6 col-md-4" key={index}>Name: {token.metadata.name}</div>
          )
        })}
      </div>
    </div>
  )
};

export default NFTCollectionPage;