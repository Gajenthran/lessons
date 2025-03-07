#include <vector>

class GSImage {
public:
  GSImage(char const* filename);
  GSImage(int w, int h);

  void save_png(char const* filename);
  auto pixels() { return pixels_.data(); }
  auto pixels() const { return pixels_.data(); }
  auto w() const { return w_; }
  auto h() const { return h_; }

  class View {
  public:
    int x;
    int y;
    int w;
    int h;
    GSImage& image;
    auto operator[](int r) { return image.pixels() + (y + r) * image.w() + x; }
    auto getPixel(int r, int c) { return image.pixels() + (y + r) * image.w() + (x + c); }
  };

  auto view(int x, int y, int w, int h) {
    return View { x, y, w, h, *this };
  }

private:
  std::vector<float> pixels_;
  int w_;
  int h_;
};