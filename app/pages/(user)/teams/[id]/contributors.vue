<script setup lang="ts">
const $router = useRouter()
const { isOpenModal, selectedContributor, getContributors } = useContributor()

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
    <page-header title="Team - Contributors">
      <template #prefix>
        <u-button
          size="lg"
          label="Back"
          leading-icon="material-symbols:chevron-left-rounded"
          @click="$router.back()"
        />
      </template>
    </page-header>

    <div class="space-y-8 flex flex-col grow min-h-0">
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

      <div class="space-y-8 grow flex flex-col justify-between items-center overflow-y-hidden">
        <contributor-table class="" />

        <u-pagination variant="ghost" />
      </div>
    </div>
  </div>
</template>
