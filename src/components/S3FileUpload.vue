<template>
  <div>
    <div v-if="isLoading">
      <p>Mengunggah berkas Anda, silahkan tunggu...</p>
    </div>
    <div v-else>
      <v-file-input
          :label="label"
          :error-messages="uploadError"
          @change="uploadFile"
          accept="image/*,.pdf"
          counter
          dense
          outlined
          required
          show-size
          truncate-length="15"
          v-model="uploadObject"
      ></v-file-input>
    </div>
  </div>
</template>

<script>
import {postJson} from "@/utils/fetch";

const endpoint = process.env.VUE_APP_ENDPOINT;

// Uploads go straight to S3 using a presigned POST from the backend.
// No AWS credentials are shipped to the browser.
export default {
  data() {
    return {
      isLoading: false,
      uploadError: '',
      uploadObject: null,
    }
  },
  methods: {
    async uploadFile(file) {
      if (!file) {
        return;
      }

      this.isLoading = true;
      this.uploadError = '';

      try {
        const presign = await postJson(
            `${endpoint}/api/uploads/presign`,
            JSON.stringify({directory: this.directory, contentType: file.type}),
        );
        if (!presign.success) {
          throw new Error(presign.message);
        }

        const form = new FormData();
        Object.entries(presign.data.fields).forEach(([key, value]) => form.append(key, value));
        form.append('file', file);

        const upload = await fetch(presign.data.url, {method: 'POST', body: form});
        if (!upload.ok) {
          throw new Error(`S3 upload failed with status ${upload.status}`);
        }

        this.$set(this.obj, this.fieldName, presign.data.publicUrl);
      } catch (error) {
        this.uploadError = 'Gagal mengunggah berkas, silahkan coba lagi.';
        this.uploadObject = null;
        this.$set(this.obj, this.fieldName, '');
      } finally {
        this.isLoading = false;
      }
    }
  },
  props: {
    fieldName: {
      type: String,
      required: true,
    },
    obj: {
      type: Object,
      required: true
    },
    directory: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
