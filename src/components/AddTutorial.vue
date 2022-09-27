<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Titulo</label>
          <input
            type="text"
            placeholder="Digite o titulo da obra"
            class="form-control"
            id="title"
            required
            v-model="tutorial.title"
            name="title"
          />
        </div>

        <div class="form-group">
        <label for="release">Data da Leitura</label>
        <input
        type="date"
        placeholder="Digite a Data da Leitura"
          class="form-control"
          id="release"
          required
          v-model="tutorial.release"
          name="release"
        />
      </div>
  
      <div class="form-group">
        <label for="description">O seu resumo</label>
        <textarea
          type="textarea"
          rows="4"
          cols="50"
          placeholder="Digite o seu resumo sobre a obra"
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>  
  
        <button @click="saveTutorial" class="btn btn-success">Criar</button>
      </div>
  
      <div v-else>
        <h4>Successo!</h4>
        <button class="btn btn-success" @click="newTutorial">Adicionar outro</button>
      </div>
    </div>
    </template>
    
    <script>
    import TutorialDataService from "../services/TutorialDataService";
    
    export default {
      name: "add-tutorial",
      data() {
        return {
          tutorial: {
            title: "",
            description: "",
            release: "",
            published: false
          },
          submitted: false
        };
      },
      methods: {
        saveTutorial() {
          var data = {
            title: this.tutorial.title,
            description: this.tutorial.description,
            release: this.tutorial.release,
            published: false
          };
    
          TutorialDataService.create(data)
            .then(() => {
              console.log("Novo conteúdo criado com sucesso");
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
        },
        
        newTutorial() {
          this.submitted = false;
          this.tutorial = {
            title: "",
            description: "",
            release: "",
            published: false
          };
        }
      }
    };
    </script>