<template>
  <div class="p-3">
    <b-card
      class="border-0 shadow w-100 mb-4 rounded-lg"
      header-tag="header"
      header-class="d-flex justify-content-between align-items-center"
      header-bg-variant="transparent"
      body-class="p-0"
    >
      <template #header>
        <h3 class="mb-0 text-danger">Client List</h3>
        <b-button v-b-modal.add-model variant="primary">Create Client</b-button>
      </template>
      <List></List>
    </b-card>
    <Add id="add-model" type="Add" />
  </div>
</template>

<script>
import List from "~/components/Client/List.vue";
import Add from "~/components/Client/AddUpdate.vue";

export default {
  components: {
    List,
    Add,
  },
  layout: "client",
  watchQuery: true,
  async mounted() {
    await this.$store.dispatch("getClientList");
    return {};
  },
};
</script>
