<template>
  <div>
    <div class="content-section implementation dock-demo">
      <Toast />
      <Toast position="top-center" group="tc" />

      <Menubar :model="menubarItems">
        <template #start>
          <i class="pi pi-apple"></i>
        </template>
        <template #end>
          <i class="pi pi-video" />
          <i class="pi pi-wifi" />
          <i class="pi pi-volume-up" />
          <span>Fri 13:07</span>
          <i class="pi pi-search" />
          <i class="pi pi-bars" />
        </template>
      </Menubar>

      <div class="dock-window dock-advanced">
        <Dock :model="dockItems">
          <template #item="{ item }">
            <a
              href="#"
              class="p-dock-action"
              v-tooltip.top="item.label"
              @click="onDockItemClick($event, item)"
            >
              <img
                :alt="item.label"
                src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                style="width: 100%"
              />
            </a>
          </template>
        </Dock>

        <Dialog
          v-model:visible="displayTerminal"
          header="Terminal"
          :breakpoints="{ '960px': '50vw' }"
          :style="{ width: '40vw' }"
          :maximizable="true"
        >
          <Terminal
            welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')"
            prompt="primevue $"
          />
        </Dialog>

        <Dialog
          v-model:visible="displayFinder"
          header="Finder"
          :breakpoints="{ '960px': '50vw' }"
          :style="{ width: '40vw' }"
          :maximizable="true"
        >
          <Tree :value="nodes" />
        </Dialog>

        <Galleria
          v-model:visible="displayPhotos"
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="2"
          containerStyle="width: 400px"
          :circular="true"
          :fullScreen="true"
          :showThumbnails="false"
          :showItemNavigators="true"
        >
          <template #item="slotProps">
            <img
              src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
              :alt="slotProps.item.alt"
              style="width: 100%"
            />
          </template>
        </Galleria>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TerminalService from 'primevue/terminalservice'
import { useToast } from 'primevue/usetoast'
import {
  Component,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref
} from 'vue'

const Home: Component = defineComponent({
  setup() {
    onMounted(() => {
      TerminalService.on('command', commandHandler)
    })

    onBeforeUnmount(() => {
      TerminalService.off('command', commandHandler)
    })

    const displayFinder = ref(false)
    const displayTerminal = ref(false)
    const displayPhotos = ref(false)
    const images = ref([
      {
        itemImageSrc: 'images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3'
      },
      {
        itemImageSrc: 'images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
      },
      {
        itemImageSrc: 'images/galleria/galleria5.jpg',
        thumbnailImageSrc: 'images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5'
      },
      {
        itemImageSrc: 'images/galleria/galleria6.jpg',
        thumbnailImageSrc: 'images/galleria/galleria6s.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6'
      },
      {
        itemImageSrc: 'images/galleria/galleria7.jpg',
        thumbnailImageSrc: 'images/galleria/galleria7s.jpg',
        alt: 'Description for Image 7',
        title: 'Title 7'
      },
      {
        itemImageSrc: 'images/galleria/galleria8.jpg',
        thumbnailImageSrc: 'images/galleria/galleria8s.jpg',
        alt: 'Description for Image 8',
        title: 'Title 8'
      },
      {
        itemImageSrc: 'images/galleria/galleria9.jpg',
        thumbnailImageSrc: 'images/galleria/galleria9s.jpg',
        alt: 'Description for Image 9',
        title: 'Title 9'
      },
      {
        itemImageSrc: 'images/galleria/galleria10.jpg',
        thumbnailImageSrc: 'images/galleria/galleria10s.jpg',
        alt: 'Description for Image 10',
        title: 'Title 10'
      },
      {
        itemImageSrc: 'images/galleria/galleria11.jpg',
        thumbnailImageSrc: 'images/galleria/galleria11s.jpg',
        alt: 'Description for Image 11',
        title: 'Title 11'
      },
      {
        itemImageSrc: 'images/galleria/galleria12.jpg',
        thumbnailImageSrc: 'images/galleria/galleria12s.jpg',
        alt: 'Description for Image 12',
        title: 'Title 12'
      },
      {
        itemImageSrc: 'images/galleria/galleria13.jpg',
        thumbnailImageSrc: 'images/galleria/galleria13s.jpg',
        alt: 'Description for Image 13',
        title: 'Title 13'
      },
      {
        itemImageSrc: 'images/galleria/galleria14.jpg',
        thumbnailImageSrc: 'images/galleria/galleria14s.jpg',
        alt: 'Description for Image 14',
        title: 'Title 14'
      },
      {
        itemImageSrc: 'images/galleria/galleria15.jpg',
        thumbnailImageSrc: 'images/galleria/galleria15s.jpg',
        alt: 'Description for Image 15',
        title: 'Title 15'
      }
    ])
    const nodes = ref([
      {
        key: '0',
        label: 'Documents',
        data: 'Documents Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
              {
                key: '0-0-0',
                label: 'Expenses.doc',
                icon: 'pi pi-fw pi-file',
                data: 'Expenses Document'
              },
              {
                key: '0-0-1',
                label: 'Resume.doc',
                icon: 'pi pi-fw pi-file',
                data: 'Resume Document'
              }
            ]
          },
          {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [
              {
                key: '0-1-0',
                label: 'Invoices.txt',
                icon: 'pi pi-fw pi-file',
                data: 'Invoices for this month'
              }
            ]
          }
        ]
      },
      {
        key: '1',
        label: 'Events',
        data: 'Events Folder',
        icon: 'pi pi-fw pi-calendar',
        children: [
          {
            key: '1-0',
            label: 'Meeting',
            icon: 'pi pi-fw pi-calendar-plus',
            data: 'Meeting'
          },
          {
            key: '1-1',
            label: 'Product Launch',
            icon: 'pi pi-fw pi-calendar-plus',
            data: 'Product Launch'
          },
          {
            key: '1-2',
            label: 'Report Review',
            icon: 'pi pi-fw pi-calendar-plus',
            data: 'Report Review'
          }
        ]
      },
      {
        key: '2',
        label: 'Movies',
        data: 'Movies Folder',
        icon: 'pi pi-fw pi-star-fill',
        children: [
          {
            key: '2-0',
            icon: 'pi pi-fw pi-star-fill',
            label: 'Al Pacino',
            data: 'Pacino Movies',
            children: [
              {
                key: '2-0-0',
                label: 'Scarface',
                icon: 'pi pi-fw pi-video',
                data: 'Scarface Movie'
              },
              {
                key: '2-0-1',
                label: 'Serpico',
                icon: 'pi pi-fw pi-video',
                data: 'Serpico Movie'
              }
            ]
          },
          {
            key: '2-1',
            label: 'Robert De Niro',
            icon: 'pi pi-fw pi-star-fill',
            data: 'De Niro Movies',
            children: [
              {
                key: '2-1-0',
                label: 'Goodfellas',
                icon: 'pi pi-fw pi-video',
                data: 'Goodfellas Movie'
              },
              {
                key: '2-1-1',
                label: 'Untouchables',
                icon: 'pi pi-fw pi-video',
                data: 'Untouchables Movie'
              }
            ]
          }
        ]
      }
    ])
    const toast = useToast()
    const dockItems = ref([
      {
        label: 'Finder',
        icon: 'https://primefaces.org/primevue/demo/images/dock/finder.svg',
        command: () => {
          displayFinder.value = true
        }
      },
      {
        label: 'Terminal',
        icon: 'https://primefaces.org/primevue/demo/images/dock/terminal.svg',
        command: () => {
          displayTerminal.value = true
        }
      },
      {
        label: 'App Store',
        icon: 'https://primefaces.org/primevue/demo/images/dock/appstore.svg',
        command: () => {
          toast.add({
            severity: 'error',
            summary: 'An unexpected error occurred while signing in.',
            detail: 'UNTRUSTED_CERT_TITLE',
            group: 'tc',
            life: 3000
          })
        }
      },
      {
        label: 'Safari',
        icon: 'https://primefaces.org/primevue/demo/images/dock/safari.svg',
        command: () => {
          toast.add({
            severity: 'warn',
            summary: 'Safari has stopped working',
            group: 'tc',
            life: 3000
          })
        }
      },
      {
        label: 'Photos',
        icon: 'https://primefaces.org/primevue/demo/images/dock/photos.svg',
        command: () => {
          displayPhotos.value = true
        }
      },
      {
        label: 'GitHub',
        icon: 'https://primefaces.org/primevue/demo/images/dock/github.svg'
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/primevue/demo/images/dock/trash.png',
        command: () => {
          toast.add({
            severity: 'info',
            summary: 'Empty Trash',
            life: 3000
          })
        }
      }
    ])
    const menubarItems = ref([
      {
        label: 'Finder',
        class: 'menubar-root'
      },
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        label: 'Users',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit'
      }
    ])
    const responsiveOptions = ref([
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ])

    const onDockItemClick = (
      event: { preventDefault: () => void },
      item: { command: () => void }
    ) => {
      if (item.command) {
        item.command()
      }

      event.preventDefault()
    }

    const commandHandler = (text: string) => {
      let response
      const argsIndex = text.indexOf(' ')
      const command = argsIndex !== -1 ? text.substring(0, argsIndex) : text

      switch (command) {
        case 'date':
          response = 'Today is ' + new Date().toDateString()
          break

        case 'greet':
          response = 'Hola ' + text.substring(argsIndex + 1)
          break

        case 'random':
          response = Math.floor(Math.random() * 100)
          break

        default:
          response = 'Unknown command: ' + command
      }

      TerminalService.emit('response', response)
    }

    return {
      images,
      nodes,
      dockItems,
      menubarItems,
      onDockItemClick,
      commandHandler,
      displayTerminal,
      displayFinder,
      displayPhotos,
      responsiveOptions
    }
  },
  methods: {
    onDockItemClick(
      event: { preventDefault: () => void },
      item: { command: () => void }
    ) {
      if (item.command) {
        item.command()
      }

      event.preventDefault()
    },
    commandHandler(text: string) {
      let response
      const argsIndex = text.indexOf(' ')
      const command = argsIndex !== -1 ? text.substring(0, argsIndex) : text

      switch (command) {
        case 'date':
          response = 'Today is ' + new Date().toDateString()
          break

        case 'greet':
          response = 'Hola ' + text.substring(argsIndex + 1)
          break

        case 'random':
          response = Math.floor(Math.random() * 100)
          break

        default:
          response = 'Unknown command: ' + command
      }

      TerminalService.emit('response', response)
    }
  }
})
export default Home
</script>
<style scoped lang="scss">
::v-deep(.dock-demo) {
  .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('https://www.primefaces.org/wp-content/uploads/2021/02/primevue-blog.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  .p-dock {
    z-index: 1000;
  }

  .p-menubar {
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;

    .menubar-root {
      font-weight: bold;
      padding: 0 1rem;
    }

    .p-menuitem-link {
      padding: 0.5rem 0.75rem;
    }

    .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
      padding: 0.5rem 0.75rem;

      > .p-submenu-icon {
        display: none;
      }
    }

    .p-menubar-end {
      span,
      i {
        padding: 0 0.75rem;
      }
    }

    .p-submenu-list {
      z-index: 2;
    }
  }
}
</style>
