import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router"; // Router

import { getCollection } from "../../redux/actions";


const NFTCollectionPage = () => {
  const dispatch = useDispatch()
  const collection = useSelector((state) => state.collection);
  const router = useRouter();
  const { contractAddress } = router.query;

  useEffect(() => {
    if (contractAddress) {
      dispatch(getCollection({
        contractAddress: contractAddress,
        chainId: 1
      }))
    }

  }, [contractAddress]);

  return (
    <div className='NFTCollectionPage'>
      <div class="row">
        {collection && (
          <div class="col-6 col-md-4">Name: {collection.collection_name}</div>
        )}
      </div>
    </div>
  )
};

export default NFTCollectionPage;