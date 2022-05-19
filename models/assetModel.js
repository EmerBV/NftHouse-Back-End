import mongoose from 'mongoose'

// define a schema
const assetSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { 
      type: String, 
      required: true 
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    category: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
      default: 0
    },
    sale: {
      type: Boolean,
      required: true,
      default: true
    }
    
  },
  {
    timestamps: true,
  }
);

// create the model with that schema
const Asset = mongoose.model('Asset', assetSchema);

// export the model
export default Asset;
