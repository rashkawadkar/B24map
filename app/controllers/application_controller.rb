class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def home
    hashSequence = "ZiV9iaPC|7131293|1|a|kamlesh|rash.kawadkar@hotmail.com| | | | | | | | | | |7JBjEC9wox"
    @hash_value = Digest::SHA2.new(512).hexdigest(hashSequence)
    render template: "layouts/home"
  end
end
