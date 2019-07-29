const apiKey = "wJJ6L7R-v1fr-RsznwpGDJ6jtUSk3MAjd1PVXls8wxamnwF5TQe6xwEZoF0zmWr2jib_5Hq9_m0-lqkKlOm7lszxywPDq3AEJd-6R-kI12oZzPQwPSJKSuSQ5F4-XXYx";  

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business)
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    })
  }
}

export default Yelp;