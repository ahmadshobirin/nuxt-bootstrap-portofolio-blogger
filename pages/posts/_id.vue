<template>
<div>
    <b-overlay :show="html===''" rounded="sm" class="h-100">
        <post-read :html="html" :title="title" :time="time" />
        <Fab > 
            <!-- Defines FAB buttons icon -->
            <template #icon><font-awesome-icon :icon="['fas', 'th-large']" /> </template>
            <!-- Defines Fab button options -->
            <template slot="option1"> 
                <b-tooltip target="fab-mode-btn" title="Mode Warna" class="d-none"></b-tooltip>
                <span title='Mode' pill id="fab-mode-btn" @click="$colorMode.preference = ($colorMode.preference === 'dark' ? 'light' : 'dark')">
                    <font-awesome-icon class="fa-lg"
                    :icon="['fas', $colorMode.preference === 'dark'?'sun':'moon']"
                    />
                </span>
            </template> 
            <template slot="option2">
                <b-tooltip target="fab-back-btn" title="Kembali" class="d-none"></b-tooltip>
                <span  title="Kembali" pill id="fab-back-btn" @click="$router.go(-1)">
                    <font-awesome-icon class="fa-lg"
                    :icon="['fas', 'arrow-circle-left']"
                    />
                </span>
            </template> 
        </Fab>
        <template #overlay>
        <div class="text-center mt-5" style="height:100%">
            <font-awesome-icon class="fa-lg" :icon="['fas', 'clock']" />
            <p id="cancel-label">Page is being loaded...</p>
        </div>
        </template>
    </b-overlay>
</div>
</template>

<script>

export default {
    layout:'none',
    scrollToTop: false,
    data(){
        return {            
            html:'',
            title:'',
            time:''
        }
    },
    computed:{        
        blogger () {
            return process.env.blogger
        },
    },
    created(){
    },
    mounted(){
        this.readPost();
    },
    methods:{
        async readPost () {
            const url = 'https://www.googleapis.com/blogger/v3/blogs'
            let formattedUrl = `${url}/${this.blogger.id}/posts/${this.$route.params.id}?key=${this.blogger.key}`
            const post = await this.$axios.$get(formattedUrl)
            this.html = post.content;
            this.title = post.title;
            this.time = post.updated.replace("T"," ");
        }
    }
}
</script>