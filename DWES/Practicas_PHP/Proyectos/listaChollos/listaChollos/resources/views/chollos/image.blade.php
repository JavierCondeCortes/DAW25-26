 <form action="{{ route('post.image') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="mb-3">
                        <div class="input-group">
                            <input type="file" class="form-control @error('image') is-invalid @enderror"
                                id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                accept="image/*" name="image"
                                onchange="document.getElementById('preview').src = window.URL.createObjectURL(this.files[0]);document.getElementById('preview').style.display = 'block';">                           
                        </div>
                    </div>
                    <div class="mb-3">
                       @error('image')
                          <div class="text-danger">{{ $message }}</div>
                      @enderror
                    </div>
                    <div class="mb-3">
                        <img id="preview" src="" alt="Image preview"
                            style="max-width: 300px; display: block; border: 1px solid #ccc; padding: 5px;display:none;">
                    </div>
 
 
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>