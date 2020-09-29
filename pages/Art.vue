<template>
  <div>
    <Heading>
      <h1 slot="heading">{{title}}</h1>
    </Heading>
    <!-- LOOP through art pieces -->
    <div class="row">
      <div v-for="object in objects" class="col-12 col-sm-6 col-lg-4 art__container" v-if="objects">
        <b-button variant="outline-danger" class="mb-4 p-2 rounded-circle art__btn" v-b-popover.hover.right="(object.medium + ' | by ' + object.artistDisplayName)" v-bind:title="object.title">
          <figure class="art mb-0">
            <div class="art__img border border-dark rounded-circle overflow-hidden bg-dark">
              <!-- BIND attritbutes to images -->
              <!-- image component pulled in here -->
              <ArtPiece
                :src="object.primaryImage"
                :alt="object.alt"
                :title="object.title"
              >
              </ArtPiece>
            </div>
          </figure>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
export default {
  name: 'Art',
  data () {
    return {
      objects: [
        {
          objectID: 1,
          primaryImage: "http://heatherdaniellehaws.com/images/FemaleNude1.jpg",
          alt: "Painting of a redheaded woman dressed in a red nightgown leaning against a wall.",
          title: "Female Nude 1",
          medium: "Oil Paint on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 2,
          primaryImage: "http://heatherdaniellehaws.com/images/FemaleNude2.jpg",
          alt: "Painting very light colors, topless woman from waist up.",
          title: "Female Nude 2",
          medium: "Oil Paint on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 3,
          primaryImage: "http://heatherdaniellehaws.com/images/FemaleNude3.jpg",
          alt: "Painting of a nude woman sitting backwards in a chair facing away.",
          title: "Female Nude 3",
          medium: "Oil Paint on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 4,
          primaryImage: "http://heatherdaniellehaws.com/images/redHeadedNude.jpg",
          alt: "Painting of red headed woman sitting on stool.",
          title: "Red Headed Nude",
          medium: "Oil Paint on Wood",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 5,
          primaryImage: "http://heatherdaniellehaws.com/images/MaleNude1.jpg",
          alt: "Painting of a nude man, standing, from behind.",
          title: "Male Nude 1",
          medium: "Oil Paint on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 6,
          primaryImage: "http://heatherdaniellehaws.com/images/MaleNude2.jpg",
          alt: "Painting of a shirtless man wearing a hat with a red curtain hanging in the background. Focused in on waist up.",
          title: "Male Nude 2",
          medium: "Oil Paint on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 7,
          primaryImage: "http://heatherdaniellehaws.com/images/MaleNude3.jpg",
          alt: "Painting of a shirtless man leaning against a greenish colored cloth, focused on waist up.",
          title: "Male Nude 3",
          medium: "Oil Paint on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 8,
          primaryImage: "http://heatherdaniellehaws.com/images/SelfStudy1.jpg",
          alt: "Chalk drawing of woman baring her teeth, looking uncomfortable or upset. High contrast, red, black, and white colors.",
          title: "Self Portrait",
          medium: "Chalk on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 9,
          primaryImage: "http://heatherdaniellehaws.com/images/StillLife1.jpg",
          alt: "Painting of a still life.",
          title: "Still Life 1",
          medium: "Oil Paint on Canvas",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 10,
          primaryImage: "http://heatherdaniellehaws.com/images/StillLife2.jpg",
          alt: "Charcoal drawing of a Barbie doll.",
          title: "Still Life 2",
          medium: "Charcoal on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 11,
          primaryImage: "http://heatherdaniellehaws.com/images/StillLife3.jpg",
          alt: "Painting of yellow banana sitting on a purple cloth.",
          title: "Still Life 3",
          medium: "Acrylic on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 12,
          primaryImage: "http://heatherdaniellehaws.com/images/amy-portrait.jpg",
          alt: "Color Pencil drawing of woman with arms outstretched, sunflowers in the background, fire at her feet.",
          title: "Portrait of Amy",
          medium: "Color Pencil on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 13,
          primaryImage: "http://heatherdaniellehaws.com/images/evan-portrait.jpg",
          alt: "Color Pencil drawing of two sides of a man - one of the king and one of the warrior, based on the King of Hearts from a deck of cards.",
          title: "Portrait of Evan",
          medium: "Color Pencil on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 14,
          primaryImage: "http://heatherdaniellehaws.com/images/colonel.jpg",
          alt: "Color Pencil drawing of a black and white dog dressed up like a Colonel with a patch over one eye and water in the background.",
          title: "Portrait of the Colonel",
          medium: "Color Pencil on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 15,
          primaryImage: "http://heatherdaniellehaws.com/images/prince.jpg",
          alt: "Color Pencil drawing of a yellow and tan dog dressed up as a prince with a black background.",
          title: "Portrait of the Prince",
          medium: "Color Pencil on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 16,
          primaryImage: "http://heatherdaniellehaws.com/images/serra.jpg",
          alt: "Color Pencil drawing in the style of Alfons Mucha of a woman with golden, curly hair",
          title: "Portrait of Serra",
          medium: "Color Pencil on Paper",
          artistDisplayName: "Heather Malloy"
        },
        {
          objectID: 17,
          primaryImage: "http://heatherdaniellehaws.com/images/AmyBeforeChristmas.jpg",
          alt: "Color Pencil Drawing of a woman in Mexican Style Clothing and Make-Up standing in front of a Nightmare Before Christmas Background.",
          title: "Portrait of Ami",
          medium: "Color Pencil on Paper",
          artistDisplayName: "Heather Malloy"
        }
      ],
      title: 'Art'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
  // I could not, for the life of me, figure this out.
  //
  // data() {
  //   return {
  //     loading:true,
  //     objects:null,
  //     errored:false
  //   }
  // },
  // mounted() {
  //   axios
  //   .get('https://collectionapi.metmuseum.org/public/collection/v1/objects')
  //   // this returns a list of all objectIDs for the art. How do I do this?
  //   .then(response => (this.objects = response.data))
  //   .catch(error => {
  //     console.log(error)
  //     this.errored = true
  //   })
  //   .finally(() => this.loading = false)
  // }
}
</script>

<style scoped>
</style>
