class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def home
    render template: "layouts/home"
    hashSequence = "mdxF6zzs|7121293|1|a|kamlesh|rash.kawadkar@hotmail.com| | | | | | | | | | |PAywewaLkM"
    @hash_value = Digest::SHA2.new(512).hexdigest(hashSequence)
  end
end
