<template>
	<div>
		
		<nuxt-link to="/">main</nuxt-link>
			
			<h1>Название: {{description.Title}}</h1>
			<p>Описание: {{description.Description}}</p>
			<p>Цена: {{description.Price}}</p>
		
	<button @click="greet">купить</button>
	</div>
</template>

<script>
	export default{
		head: {
    		title: 'Описание'
    	},
		data() {
			return{
				description: 
        			{
                "id": 1,
                "Title": "Попка корги",
                "Description": "Туда можно засунуть ценные вещички :З",
                "Price": 2000.0,
                "photos": [
                    {
                        "Direction": "dsfgfgsdfgsf",
                        "alt": "picture"
                    },
                    {
                        "Direction": "В зеленолупье",
                        "alt": "picture"
                    }
                ],
                "modifications": [
                    {
                        "color": "red",
                        "size": "S"
                    },
                    {
                        "color": "orange",
                        "size": "L"
                    },
                    {
                        "color": "green",
                        "size": "S"
                    }
                ]
            }
		        
					}
		},
		 methods: {
    greet: function (event) {
      // `this` внутри методов указывает на экземпляр Vue
      alert('вы приобрели товар, все гуд. Куплен товар '+ this.description.Title)
      
    }
  }
  ,
  // REGEN
		created: function() {
			this.$store.dispatch('getDescription');
		},
		computed: {
			goods () {
				return this.$store.state.description;
			}
		}
	}
</script> 

<style>
	
</style>