<template>
  <div>
    <div v-if="isLoading">
      <p>Mengunggah berkas Anda, silahkan tunggu...</p>
    </div>
    <div v-else>
      <v-file-input
          :label="label"
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
import S3 from 'aws-s3';

export default {
  data() {
    return {
      isLoading: false,
      uploadObject: {name: this.obj[this.fieldName] || ""}
    }
  },
  computed: {
    S3Config() {
      const awsAccessKeyId = process.env.VUE_APP_AWS_ACCESS_KEY_ID;
      const awsSecretAccessKey = process.env.VUE_APP_AWS_SECRET_ACCESS_KEY;
      const awsS3CustomDomain = process.env.VUE_APP_AWS_S3_CUSTOM_DOMAIN;
      const awsS3BaseUrl = "https://" + awsS3CustomDomain;
      const awsStorageBucketName = process.env.VUE_APP_AWS_STORAGE_BUCKET_NAME;
      const awsRegion = process.env.VUE_APP_AWS_REGION;

      return {
        accessKeyId: awsAccessKeyId,
        bucketName: awsStorageBucketName,
        dirName: this.directory,
        region: awsRegion,
        s3Url: awsS3BaseUrl,
        secretAccessKey: awsSecretAccessKey,
      }
    },
    newFileName() {
      return `${Math.random().toString().slice(2, 5)}-${this.uploadObject.name}`
    },
    url() {
      return `${this.S3Config.s3Url}/${this.directory}/${this.newFileName}`;
    }
  },
  methods: {
    uploadFile() {
      let file = this.uploadObject

      this.isLoading = true
      const S3Client = new S3(this.S3Config);
      S3Client
          .uploadFile(file, this.newFileName).finally(() => {
        this.isLoading = false
        let fileExtension = file.type.split('/')[1]
        let fileUrl = `${this.url}.${fileExtension}`;
        this.obj[this.fieldName] = fileUrl
      })
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
