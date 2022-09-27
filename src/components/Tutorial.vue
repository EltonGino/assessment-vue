 <template>
    <div v-if="currentTutorial" class="edit-form">
      <h4>Descrição do Conteúdo</h4>
      <form>
        <div class="form-group">
          <label for="title">Título</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentTutorial.title"
          />
        </div>

        <div class="form-group">
          <label for="release">Data da leitura</label>
          <input
            type="date"
            class="form-control"
            id="release"
            v-model="currentTutorial.release"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Descrição</label>
          <textarea
            type="textarea"
            rows="4"
            cols="50"
            class="form-control"
            id="description"
            v-model="currentTutorial.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentTutorial.published ? "Publicado" : "Pendente" }}
        </div>
      </form>
  
      <button
        class="badge badge-primary mr-2"
        v-if="currentTutorial.published"
        @click="updatePublished(false)"
      >
      Retirar Publicação
      </button>
      <button
        v-else
        class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
      Publicar
      </button>
  
      <button class="badge badge-danger mr-2" @click="deleteTutorial">
        Deletar
      </button>
  
      <button type="submit" class="badge badge-success" @click="updateTutorial">
        Atualizar
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Clique para mais informações</p>
    </div>
  </template>
  n  
  <script>
  import TutorialDataService from "../services/TutorialDataService";
  
  export default {
    name: "tutorial",
    props: ["tutorial"],
    data() {
      return {
        currentTutorial: null,
        message: "",
      };
    },
    watch: {
      tutorial: function(tutorial) {
        this.currentTutorial = { ...tutorial };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        TutorialDataService.update(this.currentTutorial.key, {
          published: status,
        })
          .then(() => {
            this.currentTutorial.published = status;
            this.message = "Estatus atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateTutorial() {
        const data = {
          title: this.currentTutorial.title,
          description: this.currentTutorial.description,
          release: this.currentTutorial.release,
        };
  
        TutorialDataService.update(this.currentTutorial.key, data)
          .then(() => {
            this.message = "Conteúdo atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteTutorial() {
        TutorialDataService.delete(this.currentTutorial.key)
          .then(() => {
            this.$emit("refreshList");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.currentTutorial = { ...this.tutorial }
    },
  };
  </script>