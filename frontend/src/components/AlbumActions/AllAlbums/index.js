import { Link } from 'react-router-dom';

import './AllAlbums.css';

function AllAlbums ({ albums }) {
  return (
    <div className='all-albums-div'>
      {albums?.map((album) => {
        return (
          <div key={album.id}>
            {
              album?.PhotosInAlbum.length ?
              <Link className='album' to={`/albums/${album.id}`}>
                <img className='album-cover' src={album.PhotosInAlbum[0].Photo.photo_url} />
              </Link>
              :
              <Link className='album-cover' to={`/albums/${album.id}`}>{album.name}</Link>}
              <Link className='album-name' to={`/albums/${album.id}`}>{album.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default AllAlbums;
