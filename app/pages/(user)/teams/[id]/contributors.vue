<script setup lang="ts">
const $router = useRouter()
const { isOpenModal, contributors, selectedContributor, getContributors } = useContributor()

const onClickCreate = () => {
  selectedContributor.value = null
  isOpenModal.value.form = true
}

onMounted(async () => {
  await getContributors()
})
</script>

<template>
  <div class="space-y-8 h-full flex flex-col">
    <page-header title="Team Name - Contributors">
      <template #prefix>
        <u-button
          size="lg"
          label="Back"
          leading-icon="material-symbols:chevron-left-rounded"
          @click="$router.back()"
        />
      </template>
    </page-header>

    <div class="space-y-8 flex flex-col grow">
      <div class="flex justify-between">
        <div class="space-x-5">
          <u-input
            size="lg"
            placeholder="Search"
            leading-icon="material-symbols:search-rounded"
          />

          <u-button
            size="lg"
            label="Filter"
            trailing-icon="material-symbols:filter-list-rounded"
          />
        </div>

        <u-button
          size="lg"
          label="Add New"
          trailing-icon="material-symbols:add-rounded"
          @click="onClickCreate"
        />
      </div>

      <div class="space-y-8 grow flex flex-col justify-between items-center">
        <div class="w-full bg-white rounded-lg border border-accented overflow-hidden">
          <u-table :data="contributors" />
        </div>

        <u-pagination variant="ghost" />
      </div>
    </div>
  </div>
</template>
